"use client"

import { myWixClient } from "@/context/wixContext";
import { useContext } from "react";

export default function useWixClient() {
    return useContext(myWixClient);
}
