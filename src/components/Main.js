import React, { Component } from 'react'
import Identicon from "identicon.js";
import Layout2 from "../components/layout/layout2";


class Main extends Component {
  render() {
    return (
      <Layout2>
      <div className=" flex w-full flex-wrap md:flex-row flex-col-reverse  justify-between bg-gradient-to-l p-14 from-gray-700 via-gray-900 to-black">
        

        <div className=' w-[50rem] '>
        <p>lorem asdfasdf asdf asdf asdf asdfas df asdf asdf a  asdf  
        Economist Intelligence Unit
        From Wikipedia, the free encyclopedia
        Jump to navigationJump to search
        
        This article has multiple issues. Please help improve it or discuss these issues on the talk page. (Learn how and when to remove these template messages)
        This article needs additional citations for verification. (March 2016)
        This article may rely excessively on sources too closely associated with the subject, potentially preventing the article from being verifiable and neutral. (March 2016)
        Economist Intelligence Unit Limited
        Economist Intelligence Unit logo.png
        Type	Business unit
        Founded	1946
        Headquarters	London, England
        Products	Forecasting, economic research and analysis
        Parent	Economist Group
        Subsidiaries	Bazian, Clearstate, Canback Consulting
        Website	www.eiu.com
        The Economist Intelligence Unit (EIU) is the research and analysis division of the Economist Group, providing forecasting and advisory services through research and analysis, such as monthly country reports, five-year country economic forecasts, country risk service reports, and industry reports.[1][2] The EIU provides country, industry, and management analysis worldwide and incorporates the former Business International Corporation, a UK company acquired by its parent company in 1986. The EIU has its main offices in four cities - London, New York, Hong Kong and Dubai.[3]
        
        Its Managing Director is Robin Bew, formerly the Editorial Director and Chief Economist.
        
        
        Contents
        1	Acquisitions
        1.1	Bazian
        1.2	Clearstate
        1.3	Canback Consulting
        2	Reports
        2.1	CHAMPS
        2.2	Democracy Index
        2.3	Government Broadband Index
        3	Products
        3.1	Market Explorer
        4	See also
        5	References
        6	External links
        Acquisitions
        Bazian
        In December 2012, the Economist Intelligence Unit acquired Bazian, which specialises in the analysis and supply of clinical evidence on health services, treatment, and health technologies to assess clinical effectiveness and value for money. Headquartered in London, Bazian was founded by Vivek Muthu and Anna Donald in 1999.
        
        Clearstate
        In April 2012, the Economist Intelligence Unit acquired Clearstate, a market intelligence firm offering customised strategic advisory and primary research specifically addressing the healthcare and life sciences domains within the Asia Pacific. Clearstate was founded in 2006 and is headquartered in Singapore.
        
        Canback Consulting
        In July 2015, the Economist Intelligence Unit acquired Canback & Company, a global management consulting firm serving primarily consumer-facing industries and leveraging predictive analytics. It was founded in 2004 and was headquartered in Boston. It folded into the EIU in 2020.
        
        Reports
        CHAMPS
        In November 2010, the Economist Intelligence Unit released the Access China White Paper profiling the economies of the top 20 emerging cities in China, directed by Stephen Joske, China Forecasting, for the Economist Intelligence Unit. It was created to support a report conducted by the Economist Intelligence Unit's Access China Service, "CHAMPS: China’s fastest-growing cities". These cities are favoured for several reasons, including the breadth of business opportunities available, the ongoing construction boom, rising home and vehicle ownership and spending on personal appliances. The report coined the acronym CHAMPS (Chongqing, Hefei, Anshan, Maanshan, Pingdingshan and Shenyang).[4]
        
        Democracy Index
        In 2006 (with updates in 2008, 2010 and every year since), the Economist Intelligence Unit released the Democracy Index, an index compiled by examining the state of democracy in 167 countries, attempting to quantify this with an Index of Democracy focusing on five general categories—electoral process and pluralism, civil liberties, functioning of government, political participation and political culture.
        
        Government Broadband Index
        In January 2011, the Unit released the Government Broadband Index (gBBi), which assesses countries on the basis of government planning, as opposed to current broadband capability. With ambitious targets for both the speed and coverage of next-generation broadband networks, the developed countries of Southeast Asia scored highest. According to the index, Greece is the worst-performing country measured, due to its relatively low coverage target and drawn-out deployment schedule. Greece also suffers due to the considerable size of its public-funding commitment as a percentage of overall government budget revenues, and because its plan does little to encourage competition.[5]
        
        Products
        Market Explorer
        In November 2015, the Economist Intelligence Unit launched Market Explorer in Collaboration with Canback. It is an online tool which was designed to scan markets in various countries and cities across the globe and find the best locations for a product or service.
        
        See also
        Consensus Economics: Surveys of International Economic Forecasts
        E-readiness rankings
        Global Liveability Ranking
        Quality-of-Life Index
        References
         "Country analysis, industry analysis - Market risk assessment". www.eiu.com.
         "NPP will secure re-election in 2020 – EIU Report". Citi Newsroom. 2019-05-15. Retrieved 2019-05-20.
         "Contact us eiu.com".
         "THE RISE OF THE 'CHAMPS' - NEW REPORT MAPS BUSINESS OPPORTUNITY IN CHINA'S FASTEST GROWING CITIES". sourcewire.com.
         "South Korea tops the EIU's inaugural government broadband index and Japan comes a close second". sourcewire.com.
        External links
        The Economist Intelligence Unit
         Media related to Economist Intelligence Unit at Wikimedia Commons
        vte
        The Economist Group
        Authority control Edit this at Wikidata
        Categories: Economist Intelligence UnitMass media companies of the United KingdomThe EconomistResearch and analysis firmsResearch and analysis firms of the United Kingdom
        Navigation menu
        Not logged in
        Talk
        Contributions
        Create account
        Log in
        ArticleTalk
        ReadEditView history
        Search
        Search Wikipedia
        Main page
        Contents
        Current events
        Random article
        About Wikipedia
        Contact us
        Donate
        Contribute
        Help
        Learn to edit
        Community portal
        Recent changes
        Upload file
        Tools
        What links here
        Related changes
        Special pages
        Permanent link
        Page information
        Cite this page
        Wikidata item
        Print/export
        Download as PDF
        Printable version
        In other projects
        Wikimedia Commons
        
        Languages
        العربية
        Deutsch
        Español
        Français
        한국어
        Bahasa Indonesia
        日本語
        اردو
        中文
        5 more
        Edit links
        This page was last edited on 14 July 2022, at 01:40 (UTC).
        Text is available under the Creative Commons Attribution-ShareAlike License 3.0; additional terms may apply. By using this site, you agree to the Terms of Use and Privacy Policy. Wikipedia® is a registered trademark of the Wikimedia Foundation, Inc., a non-profit organization.
        Privacy policyAbout WikipediaDisclaimersContact WikipediaMobile viewDevelopersStatisticsCookie statementWikimedia FoundationPowered by MediaWiki </p>
        {this.props.images.map((image, key) => {
          return (
            <div className="card mb-4" key={key}>
              <div className="card-header">
              
                <img
                  alt="avatar"
                  className="mr-2"
                  width="30"
                  height="30"
                  src={`data:image/png;base64,${new Identicon(
                    image.author,
                    30
                  ).toString()}`}
                />
                <small className="text-muted">{image.author}</small>
              </div>
              <ul id="imageList" className="list-group list-group-flush">
                <li className="list-group-item">
                  <p class="text-center">
                    <img
                      alt="image"
                      src={`https://ipfs.infura.io/ipfs/${image.hash}`}
                      style={{ maxWidth: "420px" }}
                    />
                  </p>
                  <p>{image.description}</p>
                </li>
                <li key={key} className="list-group-item py-2">
                  <small className="float-left mt-1 text-muted">
                    TIPS:{" "}
                    {window.web3.utils.fromWei(
                      image.tipAmount.toString(),
                      "Ether"
                    )}{" "}
                    ETH
                  </small>

               
   

                  <button
                    className="btn btn-link btn-sm float-right pt-0"
                    name={image.id}
                    onClick={(event) => {
                      let tipAmount = window.web3.utils.toWei(
                        "0.1",
                        "Ether"
                      );
                      console.log(event.target.name, tipAmount);
                      this.props.tipImageOwner(
                        event.target.name,
                        tipAmount
                      );
                    }}
                  >
                    TIP 0.1 ETH
                  </button>

                    


                </li>
              </ul>
            </div>
          );
        })}
        </div>
        <div
            role="main"
            className=" md:w-3/12   "
          >
            <div className="bg-[#80a0cd] rounded-lg">
              <p>&nbsp;</p>
              <h2 className=" font-bold text-2xl p-2">Share Image</h2>
              <div className="px-2 py-2">
                <form
                  onSubmit={(event) => {
                    event.preventDefault();
                    const description = this.imageDescription.value;
                    this.props.uploadImage(description);
                  }}
                >
                  <div className="flex justify-center items-center w-full">
                    <label
                      for="dropzone-file"
                      className="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                    >
                      <div className="flex flex-col justify-center items-center pt-5 pb-6">
                        <svg
                          aria-hidden="true"
                          className="mb-3 w-10 h-10 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                          ></path>
                        </svg>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                          <span className="font-semibold">Click to upload</span> or
                          drag and drop
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          SVG, PNG, JPG or GIF (MAX. 800x400px)
                        </p>
                      </div>
                      <input
                        id="dropzone-file"
                        type="file"
                        accept=".jpg, .jpeg, .png, .bmp, .gif"
                        onChange={this.props.capturefile}
                        className="hidden"
                      />
                    </label>
                  </div>

                  <div className="form-group mr-sm-2">
                    <br></br>
                    <input
                      id="imageDescription"
                      type="text"
                      ref={(input) => {
                        this.imageDescription = input;
                      }}
                      className="form-control"
                      placeholder="Image description..."
                      required
                    />
                  
                    </div>
                  <button
                    type="submit"
                    className="bg-[#6565e7] rounded-md hover:bg-[#60c9c7] ml-2 p-2"
                  >
                    Upload!
                  </button>
                </form>
              </div>
            </div>
            <p>&nbsp;</p>
          </div>
      </div>
      </Layout2>
    );
  }
}

export default Main;
