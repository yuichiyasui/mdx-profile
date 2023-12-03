import { ReactNode } from "react";

type Props = {
  contents: {
    title: string;
    description: ReactNode | string[];
  }[];
};

export const DescriptionList = ({ contents }: Props) => {
  return (
    <dl className="border border-gray-300">
      {contents.map((content) => {
        return (
          <div
            key={content.title}
            className="grid grid-cols-[160px_1fr] border-b border-b-gray-300 last:border-b-0"
          >
            <dt className="border-r border-r-gray-300 bg-gray-100 px-4 py-1 font-bold">
              {content.title}
            </dt>
            <dd className="px-4 py-1">
              {(() => {
                if (Array.isArray(content.description)) {
                  return (
                    <div className="flex gap-x-1">
                      {content.description.map((desc) => {
                        return (
                          <p
                            key={desc}
                            className="after:content-[','] after:last:content-none"
                          >
                            {desc}
                          </p>
                        );
                      })}
                    </div>
                  );
                }

                if (typeof content.description === "string") {
                  return (
                    <p className="whitespace-pre-line">
                      {content.description.trim()}
                    </p>
                  );
                }

                return content.description;
              })()}
            </dd>
          </div>
        );
      })}
    </dl>
  );
};
