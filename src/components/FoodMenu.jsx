import { useTranslation } from "react-i18next";
import MenuTabs from "./MenuTabs";

const FoodMenu = () => {
  const { t } = useTranslation();

  const menu = t("foodmenu", { returnObjects: true });
  const menuItems = t("foodItems", { returnObjects: true });

  const sections = [menu, menuItems];

  return (
    <div id="menu" className="container-xxl py-5">
      {sections.map((section, index) => (
        <div key={index} className={`container ${index === 0 ? "mb-5" : ""}`}>
          {/* Header */}
          <div className="text-center mb-5">
            <h5 className="section-title ff-secondary fw-normal">
              {section.title}
            </h5>
            <h1 className="fw-bold fs-4 fs-md-2">
              {section.subtitle}
            </h1>
          </div>

          {/* Tabs */}
          <MenuTabs data={section} />
        </div>
      ))}
    </div>
  );
};

export default FoodMenu;
