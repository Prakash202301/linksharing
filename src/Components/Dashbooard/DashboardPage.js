import React, { Component } from "react";
// import { Navbar } from "react-bootstrap";
import Navbar from "../Navbar";
import Profilepage from "../Profilepage";
import Subscription from "./Subscription";
import TrendingTopics from "./TrendingTopics";
import SendInvitation from "./SendInvitation";
import Inbox from "./Inbox";
import ShareLink from "./ShareLink";
import CreateTopic from "./CreateTopic";

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <Profilepage />
              <Subscription />
              <TrendingTopics />
              <SendInvitation />
            </div>
            <div className="col-md-6 ">
              <Inbox />
              <ShareLink header="Share link" />
              <ShareLink header="Share Document" />
              <div className="mt-2">
                <CreateTopic />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
