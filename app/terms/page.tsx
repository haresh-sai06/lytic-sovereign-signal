import PageHead from "@/components/page/PageHead";
import Legal from "@/components/page/Legal";
export const metadata = { title: "Terms of Service — LYTIC" };
export default function T() {
  return (<><PageHead k="Commercial software licensing & terms" title={<>Terms of <em className="text-mint">Service</em></>} />
    <Legal label="Terms" sections={[
      { t: "Contractual Acceptance", p: ["These Terms of Service constitute a legally binding agreement between you or your organization and LYTIC. By accessing our software applications, web ERP platforms, APIs, or mobile apps (including the Shift logistics delivery ecosystem), you agree to be bound by these terms.", "If you are operating on behalf of a logistics company, fleet operator, or enterprise client, you certify that you have full legal authority to bind that entity to these provisions."] },
      { t: "Software Licensing & Permitted Use", p: ["LYTIC grants authorized logistics drivers, fleet supervisors, and clients a non-exclusive, revocable, non-transferable license to execute and utilize our software solely for legitimate operational dispatch, material freight transport, and fleet administration.", ["Permitted Deployment", "Route tracking, driver navigation, automated slip generation, and ERP fleet monitoring."], ["Prohibited Activities", "Reverse engineering, decompilation, unauthorized API scraping, or bypassing system limits."]] },
      { t: "Intellectual Property & Infrastructure Sovereignty", p: ["All source code, user interfaces, branding, algorithmic dispatch engines, and documentation of LYTIC and Shift remain the exclusive intellectual property of LYTIC.", "However, under our Infrastructure Sovereignty commitment, all client databases, operational freight records, and dedicated AWS servers provisioned for enterprise clients are held under complete client ownership with full export sovereignty."] },
      { t: "Legal & Support Coordination", p: ["For commercial licensing agreements, custom enterprise contracts, or operational queries, connect with our leadership using the details below."] },
    ]} /></>);
}
