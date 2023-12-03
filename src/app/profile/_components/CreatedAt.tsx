type Props = {
  date: string;
};

export const CreatedAt = ({ date }: Props) => {
  return (
    <dl className="flex justify-end">
      <dt className="pr-2 after:content-[':']">作成日</dt>
      <dd>{date}</dd>
    </dl>
  );
};
