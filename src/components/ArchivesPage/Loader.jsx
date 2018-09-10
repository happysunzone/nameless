﻿import React, { Fragment } from "react";
import ContentLoader from "react-content-loader";

const { clientWidth, clientHeight } = document.documentElement || document.body;

const Loader = () =>
  clientWidth <= 500 ? (
    <Fragment>
      <rect x="0" y="0" width="140" height="14" />
      <rect x="0" y="30" width={clientWidth * 0.65} height="14" />
      <rect x="0" y="70" width="140" height="14" />
      <rect x="0" y="100" width={clientWidth * 0.5} height="14" />
      <rect x="0" y="130" width="140" height="14" />
      <rect x="0" y="170" width={clientWidth * 0.8} height="14" />
      <rect x="0" y="200" width="140" height="14" />
      <rect x="0" y="230" width={clientWidth * 0.6} height="14" />
      <rect x="0" y="270" width="140" height="14" />
      <rect x="0" y="300" width={clientWidth * 0.75} height="14" />
    </Fragment>
  ) : (
    <Fragment>
      <rect x="35" y="0" width="125" height="14" />
      <rect x="200" y="0" width="300" height="14" />
      <rect x="35" y="45" width="125" height="14" />
      <rect x="200" y="45" width="500" height="14" />
      <rect x="35" y="90" width="125" height="14" />
      <rect x="200" y="90" width="275" height="14" />
      <rect x="35" y="135" width="125" height="14" />
      <rect x="200" y="135" width="450" height="14" />
      <rect x="35" y="180" width="125" height="14" />
      <rect x="200" y="180" width="400" height="14" />
    </Fragment>
  );

const ArchivesLoader = () => (
  <ContentLoader
    width={clientWidth}
    height={clientHeight - (clientWidth <= 500 ? 50 : 100)}
    speed={1}
    preserveAspectRatio="none"
    primaryColor={"#f3f3f3"}
    secondaryColor={"#ecebeb"}
  >
    <Loader />
  </ContentLoader>
);

export default ArchivesLoader;