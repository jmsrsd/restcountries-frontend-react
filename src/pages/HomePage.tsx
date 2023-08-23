import { useQuery } from "@tanstack/react-query";
import { Country } from "../types/Country";

export default function HomePage() {
  const uri = `https://restcountries.com/v3.1/all`;

  const query = useQuery({
    queryKey: [uri],
    queryFn: async () => {
      const response = await fetch(uri, {
        method: "GET",
        mode: "cors",
      });

      return await response.json();
    },
  });

  const { isLoading, error } = query;

  if (isLoading) {
    return <pre>{`Loading...`}</pre>;
  }

  if (error) {
    return (
      <pre>{`Oops.. Something went wrong: ${JSON.stringify(
        error,
        null,
        2,
      )}`}</pre>
    );
  }

  const data = query.data as Country[];

  return (
    <div className="w-full max-w-full flex flex-col items-center gap-3">
      {data
        .map((e) => {
          delete e.name?.nativeName;
          delete e.altSpellings;
          delete e.gini;
          delete e.fifa;
          delete e.car;
          delete e.translations;
          delete e.idd;
          delete e.currencies;
          delete e.cca2;
          delete e.ccn3;
          delete e.cca3;
          delete e.cioc;
          delete e.languages;
          delete e.demonyms;
          delete e.tld;
          delete e.capital;
          delete e.status;
          delete e.unMember;
          delete e.independent;
          delete e.population;
          delete e.timezones;
          delete e.postalCode;
          delete e.borders;
          delete e.landlocked;
          delete e.maps;
          delete e.startOfWeek;
          delete e.area;
          delete e.continents;

          return e;
        })
        .map((e) => {
          return (
            <pre className="p-3 w-96 h-96 rounded-lg border border-slate-500 whitespace-pre-wrap">
              <div className="flex flex-row h-full w-full gap-6 items-center justify-between">
                <img src={e.flags?.png} className="object-center object-contain w-12 h-12" width={48} height={48} />
                <div className="flex flex-col items-center text-center">
                  <div>{e.name?.official}</div>
                  {e.name?.official !== e.name?.common && <div>{`(${e.name?.common})`}</div>}
                </div>
                <img src={e.coatOfArms?.png ?? e.flags?.png} className="object-center object-contain w-12 h-12" width={48} height={48} />
              </div>
            </pre>
          );
        })}
    </div>
  );
}
