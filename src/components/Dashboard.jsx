import React from "react";
import "./Dashboard.css";
import {
  FaHome,
  FaUser,
  FaMapPin,
  FaArrowDown,
  FaArrowUp,
  FaWater,
  FaMoneyCheck,
  FaMoneyCheckAlt,
  FaMoneyBill,
  FaFaucet,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const home = true;
  const usage = false;
  const map = false;
  return (
    <div className="dashboard">
      <div className="dashboard-summary">
        <div className="dashboard-title">Summary</div>
        <div className="dashboard-card">
          <div className="dashboard-cardTitle">
            Usage <FaWater className="blue"/>
          </div>
          <div className="dashboard-statistics">
            <b>12.3k Gallons used today</b>{" "}
            <span className="goodText">
              12% <FaArrowDown className="arrowDown-animation" /> from last
              yesterday
            </span>
            <img
              src="https://attachments.office.net/owa/10319796%40student.tusd.net/service.svc/s/GetAttachmentThumbnail?id=AAMkADk1YTVhZWI2LWM0MGQtNDk5NS1hZGUxLWY3MjRiYTNkMzllYwBGAAAAAAArwSjgmhtSQLG%2F%2FnzrNSM6BwBTztInw42kSpoAtZ60gzzvAAAAAAEMAABTztInw42kSpoAtZ60gzzvAAMEUn0qAAABEgAQAHuZi%2F6k2DlFrkrUFTfKjew%3D&thumbnailType=2&token=eyJhbGciOiJSUzI1NiIsImtpZCI6IkQ4OThGN0RDMjk2ODQ1MDk1RUUwREZGQ0MzODBBOTM5NjUwNDNFNjQiLCJ0eXAiOiJKV1QiLCJ4NXQiOiIySmozM0Nsb1JRbGU0Tl84dzRDcE9XVUVQbVEifQ.eyJvcmlnaW4iOiJodHRwczovL291dGxvb2sub2ZmaWNlMzY1LmNvbSIsInVjIjoiYjZiN2Y2ZjA0Njk1NDAzMmI2ZGQyYTEzMzdkNmVkMmUiLCJ2ZXIiOiJFeGNoYW5nZS5DYWxsYmFjay5WMSIsImFwcGN0eHNlbmRlciI6Ik93YURvd25sb2FkQDM5NGE1NDkxLTJiOWItNDFkNS05MjBkLTk1ZTI4OTRiZmU2MiIsImlzc3JpbmciOiJXVyIsImFwcGN0eCI6IntcIm1zZXhjaHByb3RcIjpcIm93YVwiLFwicHVpZFwiOlwiMTE1MzgwMTExNTM2NjEwMTI3MFwiLFwic2NvcGVcIjpcIk93YURvd25sb2FkXCIsXCJvaWRcIjpcImZiMzZjMWJkLTlkNzUtNDQzNi1iOTNkLWU2NjQ1YzI5NGRmNlwiLFwicHJpbWFyeXNpZFwiOlwiUy0xLTUtMjEtMzE3NDM3MTk1Mi0yOTI1OTA5MDU0LTMzNDkxODc5NzktMTcyNzUwODhcIn0iLCJuYmYiOjE2Njc2NzE1MTIsImV4cCI6MTY2NzY3MjExMiwiaXNzIjoiMDAwMDAwMDItMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwQDM5NGE1NDkxLTJiOWItNDFkNS05MjBkLTk1ZTI4OTRiZmU2MiIsImF1ZCI6IjAwMDAwMDAyLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMC9hdHRhY2htZW50cy5vZmZpY2UubmV0QDM5NGE1NDkxLTJiOWItNDFkNS05MjBkLTk1ZTI4OTRiZmU2MiIsImhhcHAiOiJvd2EifQ.J0BSlRpYNxDSHd7WdV2NIHfNJgemcnaWMn2ow_nSPHxn5puWqZVUgZ2nObJVYT21DW5Ms0er2oK3MffkTOZZl_h5DJWSoHzIkCBN__Lzx7ZkRbYsml315UcwrM-2D9cwtSKhapXPDl5s07fWwN1zAMBQoMp2klEWICbOXd8xN2Ta7osHPkU6ls1OmWzdTCReejTfCJtGOLdD02IKCMpHdk1HljQJw_ufHeK0aeXFXy2zwNNNEp8CmVhsJHFe6cgpVeVt9KkkieRkCPZYQ_pZfMLDhtAkMCP3Sl0JYmFDxUqKCcDiS7JQLX9_kCUrJ-jh8XxIgQpEpSfNMoLXrkL4Gg&X-OWA-CANARY=RxzgGCHSUUSo-J6HPBAC0qDJfMpYv9oYKxbzFkxqw8IiP5m64o9OX6jfA8EIZ0Vyj6g0ig2oGPI.&owa=outlook.office365.com&scriptVer=20221028006.04&animation=true"
              alt=""
              className="dashboard-data"
            />
          </div>
        </div>
        <div className="dashboard-card">
          <div className="dashboard-cardTitle">
            Cost <FaMoneyBill className="green" />
          </div>
          <div className="dashboard-statistics">
            <b>Cost Calculation:</b> $3,783.09{" "}
            <span className="goodText">
              5% <FaArrowDown className="arrowDown-animation" /> from last
              yesterday
            </span>
            <img
              src="https://attachments.office.net/owa/10319796%40student.tusd.net/service.svc/s/GetAttachmentThumbnail?id=AAMkADk1YTVhZWI2LWM0MGQtNDk5NS1hZGUxLWY3MjRiYTNkMzllYwBGAAAAAAArwSjgmhtSQLG%2F%2FnzrNSM6BwBTztInw42kSpoAtZ60gzzvAAAAAAEMAABTztInw42kSpoAtZ60gzzvAAMEUn0tAAABEgAQANVd3EBtp2xBlfyGneoLusE%3D&thumbnailType=2&token=eyJhbGciOiJSUzI1NiIsImtpZCI6IkQ4OThGN0RDMjk2ODQ1MDk1RUUwREZGQ0MzODBBOTM5NjUwNDNFNjQiLCJ0eXAiOiJKV1QiLCJ4NXQiOiIySmozM0Nsb1JRbGU0Tl84dzRDcE9XVUVQbVEifQ.eyJvcmlnaW4iOiJodHRwczovL291dGxvb2sub2ZmaWNlMzY1LmNvbSIsInVjIjoiYjZiN2Y2ZjA0Njk1NDAzMmI2ZGQyYTEzMzdkNmVkMmUiLCJ2ZXIiOiJFeGNoYW5nZS5DYWxsYmFjay5WMSIsImFwcGN0eHNlbmRlciI6Ik93YURvd25sb2FkQDM5NGE1NDkxLTJiOWItNDFkNS05MjBkLTk1ZTI4OTRiZmU2MiIsImlzc3JpbmciOiJXVyIsImFwcGN0eCI6IntcIm1zZXhjaHByb3RcIjpcIm93YVwiLFwicHVpZFwiOlwiMTE1MzgwMTExNTM2NjEwMTI3MFwiLFwic2NvcGVcIjpcIk93YURvd25sb2FkXCIsXCJvaWRcIjpcImZiMzZjMWJkLTlkNzUtNDQzNi1iOTNkLWU2NjQ1YzI5NGRmNlwiLFwicHJpbWFyeXNpZFwiOlwiUy0xLTUtMjEtMzE3NDM3MTk1Mi0yOTI1OTA5MDU0LTMzNDkxODc5NzktMTcyNzUwODhcIn0iLCJuYmYiOjE2Njc2NzI0MTIsImV4cCI6MTY2NzY3MzAxMiwiaXNzIjoiMDAwMDAwMDItMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwQDM5NGE1NDkxLTJiOWItNDFkNS05MjBkLTk1ZTI4OTRiZmU2MiIsImF1ZCI6IjAwMDAwMDAyLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMC9hdHRhY2htZW50cy5vZmZpY2UubmV0QDM5NGE1NDkxLTJiOWItNDFkNS05MjBkLTk1ZTI4OTRiZmU2MiIsImhhcHAiOiJvd2EifQ.wPWpRkCac_CJDvSAAOSrUdHvVUIo1Zf3hotqzst2nn9jEBfKCkAogrr7yPe2HjlXajbDE_j3i7Ligcfw_EN8X4IWuoFwAtBrOecuNEU47Dp9f50g6RIF1kdTfs8lUcMmPb2eqC-WylkVO-fFhHa-d_jeCvPaF97dLKBPKWtv0Zbu4WgGDyvXOujZdjzV7KbFp-dIbnNzi6bZ5Ymlv0AbvhAmsgkN57u4R1ax2FfAXpvAAw54yodzJ41qpfsPUfaQV1mgiq43I5TzidGlpGSlUVWZNn87BkRA9KTpUHuBwTex8HieTsJEgGjhF6J8EgyJvS2NO1MNP6elhXKbsgO7Xg&X-OWA-CANARY=zKe2Sqx2SUe1hD0KA_5I-ZBgs_Jav9oYSGQRfCtQW1d_9n52hyL1Pd7SF2nQJ-KTY8SI5qBEN2s.&owa=outlook.office365.com&scriptVer=20221028006.04&animation=true"
              alt=""
              className="dashboard-data"
            />
          </div>
        </div>
        <div className="dashboard-card">
          <div className="dashboard-cardTitle">
            Potential Leakages <FaFaucet className="red" />
          </div>
          <div className="dashboard-statistics">
            <b>Total Leakage:</b> 2.3k Gallons Today
            <span className="badText">
              12% <FaArrowUp className="arrowUp-animation" /> from last
              yesterday
            </span>{" "}
            <div className="dashboard-substatistics">
              <div className="dashboard-substatistic">
                Irrigation Sensor A: 1.2k gallons
              </div>
              <div className="dashboard-substatistic">
                Irrigation Sesnor B: 800 gallons
              </div>
              <div className="dashboard-substatistic">
                Bathroom 1 Sensor: 180 gallons
              </div>
              <div className="dashboard-substatistic">
                Bathrrom 2 Sensor: 120 gallons
              </div>
            </div>
            <br />
            <b>Total Money Lost Today:</b> $872.32
            <div className="dashboard-substatistics">
              <div className="dashboard-substatistic">
                <span className="orange">Irrigation Sensor A: $300.45</span>
              </div>
              <div className="dashboard-substatistic">
                <span className="red">Irrigation Sesnor B: $353.23</span>
              </div>
              <div className="dashboard-substatistic">
                <span className="green">Bathroom 1 Sensor: $114.17</span>
              </div>
              <div className="dashboard-substatistic">
                <span className="yellow">Bathroom 2 Sensor: $160.45</span>
              </div>
            </div>
          </div>
        </div>
        <div className="dashboard-card">
          <div className="dashboard-cardTitle">
            Predicted Monthly Cost <FaMoneyCheckAlt className="yellow" />
          </div>
          <div className="dashboard-statistics">
            <b>Water Bill Estimate:</b> $20,453.25{" "}
            <span className="badText">
              23% <FaArrowUp className="arrowUp-animation" /> from last month
            </span>
            <img
              src="https://attachments.office.net/owa/10319796%40student.tusd.net/service.svc/s/GetAttachmentThumbnail?id=AAMkADk1YTVhZWI2LWM0MGQtNDk5NS1hZGUxLWY3MjRiYTNkMzllYwBGAAAAAAArwSjgmhtSQLG%2F%2FnzrNSM6BwBTztInw42kSpoAtZ60gzzvAAAAAAEMAABTztInw42kSpoAtZ60gzzvAAMEUn0sAAABEgAQAN8WDtPd5IdPpqs9nfFF7XA%3D&thumbnailType=2&token=eyJhbGciOiJSUzI1NiIsImtpZCI6IkQ4OThGN0RDMjk2ODQ1MDk1RUUwREZGQ0MzODBBOTM5NjUwNDNFNjQiLCJ0eXAiOiJKV1QiLCJ4NXQiOiIySmozM0Nsb1JRbGU0Tl84dzRDcE9XVUVQbVEifQ.eyJvcmlnaW4iOiJodHRwczovL291dGxvb2sub2ZmaWNlMzY1LmNvbSIsInVjIjoiYjZiN2Y2ZjA0Njk1NDAzMmI2ZGQyYTEzMzdkNmVkMmUiLCJ2ZXIiOiJFeGNoYW5nZS5DYWxsYmFjay5WMSIsImFwcGN0eHNlbmRlciI6Ik93YURvd25sb2FkQDM5NGE1NDkxLTJiOWItNDFkNS05MjBkLTk1ZTI4OTRiZmU2MiIsImlzc3JpbmciOiJXVyIsImFwcGN0eCI6IntcIm1zZXhjaHByb3RcIjpcIm93YVwiLFwicHVpZFwiOlwiMTE1MzgwMTExNTM2NjEwMTI3MFwiLFwic2NvcGVcIjpcIk93YURvd25sb2FkXCIsXCJvaWRcIjpcImZiMzZjMWJkLTlkNzUtNDQzNi1iOTNkLWU2NjQ1YzI5NGRmNlwiLFwicHJpbWFyeXNpZFwiOlwiUy0xLTUtMjEtMzE3NDM3MTk1Mi0yOTI1OTA5MDU0LTMzNDkxODc5NzktMTcyNzUwODhcIn0iLCJuYmYiOjE2Njc2NzI0MTIsImV4cCI6MTY2NzY3MzAxMiwiaXNzIjoiMDAwMDAwMDItMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwQDM5NGE1NDkxLTJiOWItNDFkNS05MjBkLTk1ZTI4OTRiZmU2MiIsImF1ZCI6IjAwMDAwMDAyLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMC9hdHRhY2htZW50cy5vZmZpY2UubmV0QDM5NGE1NDkxLTJiOWItNDFkNS05MjBkLTk1ZTI4OTRiZmU2MiIsImhhcHAiOiJvd2EifQ.wPWpRkCac_CJDvSAAOSrUdHvVUIo1Zf3hotqzst2nn9jEBfKCkAogrr7yPe2HjlXajbDE_j3i7Ligcfw_EN8X4IWuoFwAtBrOecuNEU47Dp9f50g6RIF1kdTfs8lUcMmPb2eqC-WylkVO-fFhHa-d_jeCvPaF97dLKBPKWtv0Zbu4WgGDyvXOujZdjzV7KbFp-dIbnNzi6bZ5Ymlv0AbvhAmsgkN57u4R1ax2FfAXpvAAw54yodzJ41qpfsPUfaQV1mgiq43I5TzidGlpGSlUVWZNn87BkRA9KTpUHuBwTex8HieTsJEgGjhF6J8EgyJvS2NO1MNP6elhXKbsgO7Xg&X-OWA-CANARY=YWwg8JsNmU2PN3Af2OuHGGBM8Kdav9oYUQXCBj5mQAVKBQVEOx4kWoUlUvU5omXjHj7xS-YpbmQ.&owa=outlook.office365.com&scriptVer=20221028006.04&animation=true"
              alt=""
              className="dashboard-data"
            />
          </div>
        </div>
      </div>
      <div className="bottom-navbar">
        <div className={`navbar-icon ${home ? `selected` : null}`}>
          <Link to="/Dashboard" className="navbarLink">
            <FaHome className="navbarIcon" />
            <p className="iconName">HOME</p>
          </Link>
        </div>
        <div className={`navbar-icon ${map ? `selected` : null}`}>
          <Link to="/Map" className="navbarLink">
            <FaMapPin className="navbarIcon" />
            <p className="iconName">MAP</p>
          </Link>
        </div>
        <div className={`navbar-icon ${usage ? `selected` : null}`}>
          <Link to="/Usage" className="navbarLink">
            <FaUser className="navbarIcon" />
            <p className="iconName">USAGE</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
