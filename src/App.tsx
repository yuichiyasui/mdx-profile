import Profile from "./Profile.mdx";

export default function App() {
  return (
    <main className="bg-white shadow print:shadow-none w-[1024px] mx-auto my-10 p-8">
      <Profile
        components={{
          h1: (props) => (
            <h1 className="text-3xl font-bold py-2">{props.children}</h1>
          ),
          h2: (props) => (
            <h2 className="text-2xl font-bold py-1 border-b border-b-gray-200 mb-4">
              {props.children}
            </h2>
          ),
          h3: (props) => (
            <h3 className="text-xl font-bold">{props.children}</h3>
          ),
          h4: (props) => (
            <h4 className="text-lg font-bold">{props.children}</h4>
          ),
          table: (props) => (
            <table className="border-collapse w-full">{props.children}</table>
          ),
          tr: (props) => (
            <tr className="border border-gray-200">{props.children}</tr>
          ),
          th: (props) => (
            <th className="border border-gray-200 bg-gray-100 whitespace-nowrap px-4 py-2">
              {props.children}
            </th>
          ),
          td: (props) => (
            <td className="border border-gray-200 px-4 py-2">
              {props.children}
            </td>
          ),
          ul: (props) => (
            <ul
              className={
                props.className?.includes("contains-task-list")
                  ? "list-none"
                  : "list-disc list-inside"
              }
            >
              {props.children}
            </ul>
          ),
          a: (props) => (
            <a
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              {...props}
            >
              {props.children}
            </a>
          ),
          input: (props) => {
            if (props.type === "checkbox") {
              return (
                <input
                  className="form-checkbox h-5 w-5"
                  type="checkbox"
                  {...props}
                />
              );
            }

            return (
              <input className="form-input rounded-md" type="text" {...props} />
            );
          },
          LeftColumnTable: (props: { header: string[]; rows: string[] }) => {
            return (
              <table className="border-collapse w-full">
                <tbody>
                  {props.header.map((header, i) => {
                    return (
                      <tr className="border border-gray-200">
                        <th className="border border-gray-200 bg-gray-100 whitespace-nowrap px-4 py-2">
                          {header}
                        </th>
                        <td className="border border-gray-200 px-4 py-2">
                          {props.rows[i]}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            );
          },
        }}
      />
    </main>
  );
}
