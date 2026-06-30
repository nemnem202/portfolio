import { UAParser } from "ua-parser-js";
import type { PageContextServer } from "vike/types";
import type { ScreenSizeType } from "@/providers/screen-size-provider";

function getScreen(pageContext: PageContextServer): ScreenSizeType {
  const ua = pageContext.headers ? (pageContext.headers["user-agent"] ?? "") : "";
  const parser = new UAParser(ua);
  const device = parser.getDevice().type;
  if (device && ["mobile", "wearable", "embedded"].includes(device)) return "sm";
  if (device === "tablet") return "md";
  return "lg";
}

export async function getGlobalData(pageContext: PageContextServer) {
  const screen = getScreen(pageContext);

  return { screen };
}
