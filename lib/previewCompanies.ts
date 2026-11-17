export type RooferCompany={
 slug:string;name:string;short:string;tagline:string;headline:string;description:string;about:string;since?:string;
 phone:string;email:string;address:string;website:string;logo?:string;
 accent:string;ink:string;soft:string;tint:string;footer:string;
 hero:string;heroFallback:string;aboutImage:string;gallery:string[];services:string[];
 distinguishing:string[];imageSource:"official"|"illustrative";
};
export const roofingCompanies:Record<string,RooferCompany>={
 "roof-by-roof-exteriors":{
  slug:"roof-by-roof-exteriors",name:"Roof By Roof Exteriors Ltd.",short:"Roof By Roof",tagline:"CALGARY ROOFING & EXTERIORS",
  headline:"Roofing that protects.\nExteriors that last.",
  description:"Residential roofing, repairs, siding and eavestroughs for Calgary homes and businesses.",
  about:"A Calgary family-owned and operated roofing and exteriors company established in 1997, offering roof installation, repairs, siding, soffits, fascia and gutters.",
  since:"Calgary since 1997",phone:"403-273-0303",email:"services@roofbyroofexteriors.ca",address:"7015 Macleod Trail SW, Calgary, AB T2H 2K6",
  website:"https://roofbyroofexteriors.ca/",accent:"#A65A3B",ink:"#2E2927",soft:"#FAF5F2",tint:"#E9D7CB",footer:"#231C19",
  hero:"/images/img-25.avif",heroFallback:"/images/img-05.avif",aboutImage:"/images/img-20.avif",gallery:["/images/img-06.avif","/images/img-16.avif","/images/img-26.avif"],
  services:["Roof Replacement","Roof Repairs","New Roof Installation","Siding & Insulation","Soffit & Fascia","Eavestroughs"],
  distinguishing:["Family-owned and operated","Roofing and full exterior services","Serving Calgary since 1997"],imageSource:"illustrative"
 },
 "bhinder-exteriors":{
  slug:"bhinder-exteriors",name:"Bhinder Exteriors",short:"Bhinder",tagline:"ROOFING & EXTERIOR SPECIALISTS",
  headline:"Better exteriors.\nBuilt for every season.",
  description:"Roofing, siding, eavestroughs and exterior solutions for Calgary homeowners.",
  about:"A Calgary exterior construction company providing roofing and a broad range of exterior improvements, including siding, soffits, fascia, stucco and eavestroughs.",
  phone:"403-680-0436",email:"bhinderexteriors13@gmail.com",address:"77 Martha's Haven Way NE, Calgary, AB T3J 4N5",
  website:"https://www.bhinderexteriors.ca/",accent:"#C77634",ink:"#283239",soft:"#F7F2ED",tint:"#EEDDCB",footer:"#1C2830",
  hero:"/images/img-16.avif",heroFallback:"/images/img-25.avif",aboutImage:"/images/img-06.avif",gallery:["/images/img-05.avif","/images/img-18.avif","/images/img-20.avif"],
  services:["Roofing","Siding Installation","Eavestroughs","Soffit & Fascia","Stucco","Hardie Board"],
  distinguishing:["Residential exterior services","Roofing, gutters and siding","Calgary-area contractor"],imageSource:"illustrative"
 },
 "ebenezer-roofing":{
  slug:"ebenezer-roofing",name:"Ebenezer Roofing",short:"Ebenezer",tagline:"CALGARY RESIDENTIAL ROOFING",
  headline:"A solid roof.\nPeace of mind.",
  description:"Roof repair, replacement and maintenance tailored for homes in Calgary and surrounding communities.",
  about:"Ebenezer Roofing specializes in residential roof installations and repairs in Calgary, with a gallery of completed work and a focus on roof systems suited to Alberta conditions.",
  phone:"403-998-5321",email:"info@ebenezerroofing.ca",address:"138-23 Millrise Dr SW, Calgary, AB T2Y 3V1",
  website:"https://www.ebenezerroofing.ca/",accent:"#A37645",ink:"#2A3033",soft:"#F4F2EE",tint:"#E6D9CA",footer:"#20282B",
  hero:"https://static.wixstatic.com/media/ba2cd3_4eff6b198a014eb99b5180c4ff755db6~mv2.jpg",heroFallback:"/images/img-20.avif",aboutImage:"/images/img-25.avif",gallery:["/images/img-16.avif","/images/img-05.avif","/images/img-26.avif"],
  services:["Roof Repairs","Roof Replacement","Roof Inspections","Asphalt Shingles","Roof Maintenance","Residential Roofing"],
  distinguishing:["Residential roof specialists","Calgary and surrounding areas","Roof repairs and replacements"],imageSource:"official"
 },
 "friends-roofing":{
  slug:"friends-roofing",name:"Friends Roofing",short:"Friends",tagline:"ROOFING & INSULATION IN ALBERTA",
  headline:"Roofing you can count on.\nNeighbours you can trust.",
  description:"Residential roof replacement, repairs, insulation, gutters and skylight services across Calgary and Airdrie.",
  about:"Friends Roofing is an Alberta contractor serving Calgary, Airdrie and neighbouring communities with roof repairs, roof replacement, attic insulation, eavestroughs and skylights.",
  phone:"825-437-9500",email:"friendsroofinginc@gmail.com",address:"Calgary and Airdrie, Alberta",
  website:"https://www.friendsroofing.ca/",accent:"#B56B45",ink:"#30373A",soft:"#F8F4F1",tint:"#EDD9CF",footer:"#253036",
  hero:"/images/img-20.avif",heroFallback:"/images/img-25.avif",aboutImage:"/images/img-18.avif",gallery:["/images/img-16.avif","/images/img-06.avif","/images/img-05.avif"],
  services:["Roof Repairs","Roof Replacement","Attic Insulation","Eavestroughs","Skylights","Residential Roofing"],
  distinguishing:["Serving Calgary and Airdrie","Roofing plus attic insulation","Repairs and replacements"],imageSource:"illustrative"
 },
 "action-roofing":{
  slug:"action-roofing",name:"Action Roofing & Siding Ltd.",short:"Action",tagline:"CALGARY ROOFING & SIDING",
  headline:"Roofing & siding.\nDone right.",
  description:"Roofing, siding, soffit, fascia and eavestrough installations for Calgary properties.",
  about:"Action Roofing & Siding offers roofing and exterior installations for new construction and renovation projects in Calgary, including siding, roof replacements, fascia and eavestroughs.",
  phone:"403-293-0497",email:"action@actionroofing.ca",address:"1936 27 Avenue NE, Unit 100, Calgary, AB T2E 7A5",
  website:"https://www.actionroofing.ca/",logo:"https://www.actionroofing.ca/wp-content/uploads/2020/05/ACTION-ROOFING-SIDING-LOGO-V4.0-e1593536918658.png",
  accent:"#C43C3F",ink:"#282328",soft:"#FFF3F3",tint:"#F6DDDE",footer:"#251B20",
  hero:"/images/img-05.avif",heroFallback:"/images/img-25.avif",aboutImage:"/images/img-16.avif",gallery:["/images/img-20.avif","/images/img-18.avif","/images/img-26.avif"],
  services:["Roof Replacement","Roof Installation","Siding","Soffit & Fascia","Eavestroughs","Exterior Renovations"],
  distinguishing:["Roofing and siding specialists","New builds and renovations","Calgary exterior installations"],imageSource:"illustrative"
 },
 "hj-roofing":{
  slug:"hj-roofing",name:"H&J Roofing & Exteriors",short:"H&J Roofing",tagline:"CALGARY ROOFING & EXTERIORS",
  headline:"A stronger roof.\nA better tomorrow.",
  description:"Roof repairs, replacement, flat roofing and exterior solutions for homes and businesses in Calgary.",
  about:"H&J Roofing & Exteriors provides Calgary roofing services spanning repairs, replacements, installation, flat roofing, siding and eavestroughs.",
  phone:"587-433-9746",email:"info@hj-roofing.ca",address:"407 Cedarpark Dr SW, Calgary, AB T2W 2J6",
  website:"https://hjroofing.ca/",accent:"#D38A37",ink:"#20313C",soft:"#F4F6F6",tint:"#DCE5E8",footer:"#192934",
  hero:"https://hjroofing.ca/wp-content/uploads/2024/04/Roofing-Company-in-Calgary.jpg",heroFallback:"/images/img-26.avif",aboutImage:"/images/img-25.avif",gallery:["/images/img-20.avif","/images/img-18.avif","/images/img-16.avif"],
  services:["Roof Repair","Roof Replacement","New Roof Installation","Flat Roofing","Siding","Eavestroughs"],
  distinguishing:["Residential and commercial services","Roofing and exterior work","Serving Calgary communities"],imageSource:"official"
 },
 "ae-roofing":{
  slug:"ae-roofing",name:"A&E Roofing Ltd.",short:"A&E Roofing",tagline:"RESIDENTIAL & COMMERCIAL ROOFING",
  headline:"Built to protect.\nMade to endure.",
  description:"Residential and commercial roofing solutions, including roof installation and repair, in Calgary.",
  about:"A&E Roofing works on residential and commercial roof systems in the Calgary area, offering roof installation and roofing services designed for the needs of each property.",
  phone:"",email:"info@aeroofing.ca",address:"7 MacEwan Park Pl, Calgary, AB",
  website:"https://aeroofing.ca/",accent:"#356979",ink:"#1A303B",soft:"#EFF6F7",tint:"#D8E8ED",footer:"#152A34",
  hero:"/images/img-26.avif",heroFallback:"/images/img-16.avif",aboutImage:"/images/img-05.avif",gallery:["/images/img-20.avif","/images/img-25.avif","/images/img-18.avif"],
  services:["Roof Installation","Residential Roofing","Commercial Roofing","Roof Repair","Roof Replacement","Roof Inspection"],
  distinguishing:["Residential and commercial roofs","New roof installation","Calgary-based roofing services"],imageSource:"illustrative"
 },
 "focus-roofing":{
  slug:"focus-roofing",name:"Focus Roofing Ltd.",short:"Focus Roofing",tagline:"ALBERTA ROOFING & EXTERIORS",
  headline:"Built for protection.\nFocused on quality.",
  description:"Roof inspections, residential and commercial roofing, and exterior services across Calgary.",
  about:"Focus Roofing Ltd. is a locally operated Alberta roofing and exterior contractor providing residential and commercial services, roofing inspections and exterior work.",
  phone:"403-475-9288",email:"info@focusroofingab.ca",address:"Bay D5, 624 Beaver Dam Rd NE, Calgary, AB T2K 4W6",
  website:"https://www.focusroofingab.ca/",logo:"https://lirp.cdn-website.com/952f6f97/dms3rep/multi/opt/logo-removebg-preview-1920w.png",
  accent:"#2178AE",ink:"#162B40",soft:"#F0F7FB",tint:"#D7E9F5",footer:"#10273B",
  hero:"https://lirp.cdn-website.com/952f6f97/dms3rep/multi/opt/down-net_http20240619-119-xs0jj0-1920w.jpg",heroFallback:"/images/img-06.avif",aboutImage:"/images/img-25.avif",gallery:["/images/img-20.avif","/images/img-16.avif","/images/img-26.avif"],
  services:["Roof Inspection","Residential Roofing","Commercial Roofing","Roof Repairs","Roof Replacement","Exterior Services"],
  distinguishing:["Locally operated","Residential and commercial work","Roofing and exterior services"],imageSource:"official"
 },
 "bricor-roofing":{
  slug:"bricor-roofing",name:"Bricor Roofing",short:"Bricor",tagline:"CALGARY ROOFING SINCE 1983",
  headline:"Experienced roofing.\nBuilt to last.",
  description:"Asphalt shingle roofing and re-roofing for Calgary homes and businesses.",
  about:"Family-owned since 1983, Bricor Roofing focuses on sloped-roof installation and re-roofing using asphalt shingles for residential and commercial properties around Calgary.",
  since:"Family-owned since 1983",phone:"403-720-3582",email:"info@bricorroofing.com",address:"#123, 12159 44 Street SE, Calgary, AB T2Z 4H3",
  website:"https://bricorroofing.com/",accent:"#757148",ink:"#292F2A",soft:"#F4F5F0",tint:"#E5E8D7",footer:"#222820",
  hero:"/images/img-35.avif",heroFallback:"/images/img-26.avif",aboutImage:"/images/img-25.avif",gallery:["/images/img-05.avif","/images/img-20.avif","/images/img-16.avif"],
  services:["Asphalt Shingles","Sloped Roofs","Roof Replacement","Re-Roofing","Roof Inspections","Residential Roofing"],
  distinguishing:["Family-owned since 1983","Asphalt-shingle specialization","Calgary and surrounding areas"],imageSource:"illustrative"
 },
 "marchuk-roofing":{
  slug:"marchuk-roofing",name:"Marchuk Roofing",short:"Marchuk",tagline:"CALGARY ROOFING & SIDING",
  headline:"Covering what matters.\nCrafted for Calgary.",
  description:"Roofing, siding and exterior improvement services for homeowners across Calgary.",
  about:"Marchuk Roofing serves Calgary with residential roofing, roof replacement, siding and related exterior improvements, including work on custom and established homes.",
  phone:"403-689-8424",email:"marchukroofing@gmail.com",address:"Calgary, Alberta",
  website:"https://marchukroofing.org/",accent:"#A96646",ink:"#263239",soft:"#F7F2EE",tint:"#EADBCF",footer:"#222B30",
  hero:"/images/img-18.avif",heroFallback:"/images/img-16.avif",aboutImage:"/images/img-25.avif",gallery:["/images/img-05.avif","/images/img-26.avif","/images/img-20.avif"],
  services:["Residential Roofing","Roof Replacement","Roof Repairs","Siding","Exterior Improvements","Roof Inspections"],
  distinguishing:["Roofing and siding projects","Serving Calgary homeowners","Renovations and replacements"],imageSource:"illustrative"
 }
};
export const companySlugs=Object.keys(roofingCompanies);
