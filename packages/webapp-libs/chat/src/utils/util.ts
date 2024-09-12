// import * as stuff from "next/font/google";
import { RAGConfig } from "../utils/types";

// Fonts
// const inter = stuff.Inter({ subsets: ["latin"] });
// const plus_jakarta_sans = stuff.Plus_Jakarta_Sans({ subsets: ["latin"] });
// const open_sans = stuff.Open_Sans({ subsets: ["latin"] });
// const pt_mono = stuff.PT_Mono({ subsets: ["latin"], weight: "400" });
// export type FontKey = "Inter" | "Plus_Jakarta_Sans" | "Open_Sans" | "PT_Mono";

// export const fonts: Record<FontKey, typeof inter> = {
//   Inter: inter,
//   Plus_Jakarta_Sans: plus_jakarta_sans,
//   Open_Sans: open_sans,
//   PT_Mono: pt_mono,
// };

export const chat_interface_info =
  "Use the Chat Interface to interact with your data. Your query will be used to retrieve relevant information and to construct a response. You can choose between different Large Language Models (LLM) to create a response.";
export const chunk_interface_info =
  "Use the Chunk Interface to browse through relevant chunks of your data, based on your last query. You can choose between different embeddings and retrieval techniques.";
export const document_interface_info =
  "Use the Document Viewer to inspect your data and extracts of context that were used to generate responses to your queries. You can switch between showing the whole document and only showing the specific extract.";

export const getWebSocketApiHost = () => {
  return "ws://localhost:8000/ws/generate_stream";
  if (process.env["NODE_ENV"] === "development") {
    return "ws://localhost:8000/ws/generate_stream";
  }
  // If you're serving the app directly through FastAPI, generate the WebSocket URL based on the current location.
  const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
  const host = window.location.host;
  return `${protocol}//${host}/ws/generate_stream`;
};

export function deepCopyRAGConfig(config: RAGConfig): RAGConfig {
  return JSON.parse(JSON.stringify(config));
}

export const closeOnClick = (element?: HTMLElement) => {
  const elem = element || document.activeElement;
  if (elem && elem instanceof HTMLElement) {
    elem.blur();
  }
};

export function arrayBufferToBase64(buffer: ArrayBuffer): string {
  let binary = "";
  const bytes = new Uint8Array(buffer);
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary); // Encode the binary string to base64
}

export const getImportWebSocketApiHost = () => {
  return "ws://localhost:8000/ws/import_files";
  if (process.env["NODE_ENV"] === "development") {
    return "ws://localhost:8000/ws/import_files";
  }
  // If you're serving the app directly through FastAPI, generate the WebSocket URL based on the current location.
  const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
  const host = window.location.host;
  return `${protocol}//${host}/ws/import_files`;
};
