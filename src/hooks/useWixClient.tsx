import { useContext } from "react";
import { WixClientContext } from "@/context/wixContext";

export default function useWixClient() {
  return useContext(WixClientContext);
}
