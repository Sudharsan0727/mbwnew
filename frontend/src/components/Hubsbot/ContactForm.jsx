import React, { useEffect } from "react";

const HubSpotForm = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: "na2", // ✅ matches your HubSpot script region
          portalId: "243666441", // ✅ your HubSpot portal ID
          formId: "YOUR_FORM_ID_HERE", // ✅ copy from HubSpot > Marketing > Forms
          target: "#hubspotForm",
        });
      }
    };
  }, []);

  return (
    <div className="py-10">
      <div id="hubspotForm" className="max-w-xl mx-auto"></div>
    </div>
  );
};

export default HubSpotForm;
