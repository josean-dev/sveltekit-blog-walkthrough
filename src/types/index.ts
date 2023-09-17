import type { ComponentType } from "svelte";

export type MarkdownPost = {
  metadata: {
    title: string;
    imgUrl: string;
    youtubeId?: string;
    publishedAt: string;
    summary: string;
  };
  default: ComponentType;
};
