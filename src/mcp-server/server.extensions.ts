/*
 * Custom MCP server extensions
 */

import { z } from "zod";
import { Register } from "./extensions.js";
import { assetsExplicitAsset } from "../funcs/assetsExplicitAsset.js";
import * as components from "../models/components/index.js";

export function registerMCPExtensions(register: Register): void {
  // Get transformation reference tool
  register.tool({
    name: "get-tx-reference",
    description: "Get Cloudinary transformation rules documentation from official docs\n\n🚨 WHEN TO USE:\n- MANDATORY before creating, modifying, or discussing Cloudinary transformations\n- REQUIRED when user asks for image/video effects, resizing, cropping, filters, etc.\n- NOT needed for simple asset management (upload, list, delete, etc.)\n- ⚠️ CALL ONLY ONCE per session - documentation doesn't change, reuse the knowledge\n\n🚨 STRICT REQUIREMENTS (when transformations are involved):\n- MUST call this tool BEFORE any transformation-related task (but only once)\n- MUST read and understand the returned documentation\n- DO NOT attempt transformations without consulting this reference\n- DO NOT make up transformation parameters\n- DO NOT guess syntax - only use documented parameters\n- DO NOT call this tool multiple times - the docs are static, remember them\n\nThis tool returns the complete, authoritative Cloudinary transformation reference that contains all valid parameters, syntax rules, and best practices.",
    scopes: ["librarian", "builder"],
    tool: async (_client, _ctx) => {
      try {
        const response = await fetch("https://cloudinary.com/documentation/cloudinary_transformation_rules.md");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const content = await response.text();

        return {
          content: [
            {
              type: "text",
              text: `# Cloudinary Transformation Rules Documentation\n\n${content}`
            }
          ]
        };
      } catch (error) {
        return {
          content: [
            {
              type: "text",
              text: `Error fetching transformation rules documentation: ${error instanceof Error ? error.message : 'Unknown error'}\n\nYou can view the documentation directly at: https://cloudinary.com/documentation/cloudinary_transformation_rules.md`
            }
          ],
          isError: true
        };
      }
    }
  });

  // Transform asset tool using explicit API with eager transformations
  register.tool({
    name: "transform-asset",
    description: "Generate derived transformations for existing assets using Cloudinary's explicit API with eager transformations\n\n⚠️ CRITICAL PREREQUISITES:\n1. MUST call get-tx-reference tool first\n2. MUST validate transformation syntax against official docs\n3. MUST use only documented parameters from the reference\n4. MUST follow proper URL component structure (slashes between components, commas within)\n\n📋 VALIDATION CHECKLIST:\n- ✅ Called get-tx-reference tool\n- ✅ Verified all parameters exist in official docs\n- ✅ Used correct syntax (e.g., f_auto/q_auto not f_auto,q_auto)\n- ✅ Applied proper component chaining rules\n- ✅ Included crop mode when using width/height\n\nThis tool creates actual derived assets on Cloudinary using the explicit API.",
    scopes: ["librarian", "builder"],
    args: {
      publicId: z.string().describe("The public ID of the existing asset to transform"),
      transformations: z.string().describe("VALIDATED transformation string using ONLY parameters from get-tx-reference docs. Examples: 'c_fill,w_300,h_200' or 'e_sepia/a_90'. MUST follow component rules: commas within components, slashes between components."),
      resourceType: z.enum(["image", "video", "raw"]).optional().default("image").describe("The resource type of the asset"),
      invalidate: z.boolean().optional().default(false).describe("Whether to invalidate cached versions"),
    },
    tool: async (client, args, _ctx) => {
      try {
        // Use the explicit API to generate eager transformations
        const result = await assetsExplicitAsset(client, args.resourceType as components.ResourceType, {
          publicId: args.publicId,
          type: "upload",
          eager: args.transformations,
          invalidate: args.invalidate,
        });

        if (!result.ok) {
          return {
            content: [
              {
                type: "text",
                text: `Error transforming asset: ${result.error.message}`
              }
            ],
            isError: true
          };
        }

        // Return raw API response
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(result.value, null, 2)
            }
          ]
        };
      } catch (error) {
        return {
          content: [
            {
              type: "text",
              text: `Error transforming asset: ${error instanceof Error ? error.message : 'Unknown error'}`
            }
          ],
          isError: true
        };
      }
    }
  });
}
