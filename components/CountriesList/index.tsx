import { CountriesListArrayProps } from "./countriesList.models";
import { nonCountryArray } from "../../variables/nonCountryArray";
import { formatDate, formatLargeNum } from "../../utils/formatting";
import {
  Container,
  HeadWrapper,
  HeadRow,
  CountryHead,
  DailyHead,
  TotalHead,
  FullyVaccHead,
  PerHundredHead,
  LastUpdatedHead,
  BodyWrapper,
  BodyRow,
} from "./CountriesList.styles";

const CountriesList = ({ countries }: CountriesListArrayProps) => {
  const countriesData = countries.filter(
    (obj) => !nonCountryArray.includes(obj.country)
  );

  return (
    <>
      <Container cellSpacing="0" cellPadding="0">
        <HeadWrapper>
          <HeadRow>
            <CountryHead>Country / Territory</CountryHead>
            <DailyHead>Daily</DailyHead>
            <TotalHead>Total</TotalHead>
            <FullyVaccHead>Fully vaccinated</FullyVaccHead>
            <PerHundredHead>%</PerHundredHead>
            <LastUpdatedHead>Last update</LastUpdatedHead>
          </HeadRow>
        </HeadWrapper>
        <BodyWrapper>
          {countriesData.flatMap((obj) => {
            const last = obj.data[obj.data.length - 1];

            return (
              <BodyRow key={obj.iso_code}>
                <td>{obj.country} </td>
                <td>{formatLargeNum(last.daily_vaccinations)}</td>
                <td> {formatLargeNum(last.total_vaccinations)} </td>
                <td> {formatLargeNum(last?.people_fully_vaccinated)} </td>
                <td className="percent-col">
                  {" "}
                  {last.people_vaccinated_per_hundred === undefined
                    ? "-"
                    : last.people_vaccinated_per_hundred}{" "}
                </td>
                <td>{formatDate(last.date)}</td>
              </BodyRow>
            );
          })}
        </BodyWrapper>
      </Container>
    </>
  );
};

export default CountriesList;