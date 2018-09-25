import React from "react";
import { Link } from "gatsby";

import Layout from "../components/Layout";

const NotFoundPage = () => (
  <Layout>
    <Link to="/">
      <h1>Nothing</h1>
    </Link>
  </Layout>
);

export default NotFoundPage;
