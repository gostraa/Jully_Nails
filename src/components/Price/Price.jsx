import { service } from "constants/service";
import {
  PriceContainer,
  PriceTitle,
  ServiceItem,
  Service,
  PriceItem,
} from "./Price.styled";

const Price = ({ t }) => {
  const serviceList = service;

  return (
    <PriceContainer>
      <PriceTitle>{t("price")}</PriceTitle>
      <ul>
        {serviceList.map(({ serviceItem, priceItem }, idx) => (
          <ServiceItem key={idx}>
            <Service>{t(serviceItem)}</Service>
            <PriceItem>{t(priceItem)}</PriceItem>
          </ServiceItem>
        ))}
      </ul>
    </PriceContainer>
  );
};

export default Price;
