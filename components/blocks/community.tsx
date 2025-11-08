import { Button } from "@/components/ui/button";
import { Github, Instagram, Twitter } from "lucide-react";

const Community1 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="flex flex-col items-center gap-5">
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg"
            alt="logo"
            className="size-10"
          />
          <h2 className="text-center text-3xl font-semibold">
            Join our community
            <br />
            <span className="text-muted-foreground/80">
              of designers & developers
            </span>
          </h2>
          <div className="flex items-center gap-4">
            <Button size="lg" variant="outline" asChild>
              <a
                href="https://x.com/shadcnblocks"
                target="_blank"
                className="size-10"
              >
                <Twitter />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a
                href="https://github.com/shadcnblocks"
                target="_blank"
                className="size-10"
              >
                <Github />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a
                href="https://shadcnblocks.com"
                target="_blank"
                className="size-10"
              >
                <Instagram />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Community1 };
