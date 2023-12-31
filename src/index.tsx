import { Document, Page, Text, View } from "@react-pdf/renderer";
import React from "react";
import { createTw } from "react-pdf-tailwind";

const tw = createTw({
  theme: {
    fontFamily: {},
    extend: {
      colors: {
        custom: "#ab47bc",
      },
    },
  },
});

const MyDocument = () => (
  <Document>
    <Page size="A4" style={tw("flex-row bg-[#E4E4E4]")}>
      <View style={tw("m-10 p-10 grow")}>
        <Text style={tw("text-custom")}>Hello !</Text>
      </View>
      <View style={tw("m-10 p-10 grow")}>
        <Text>World !</Text>
      </View>
    </Page>
  </Document>
);

export default <MyDocument />;
export const name = "PDF";
