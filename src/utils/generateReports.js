import XLSX from "xlsx";
import { writeFile, readFile } from "react-native-fs";
import { ToastAndroid } from "react-native";
import RNFS from "react-native-fs";
import moment from "moment";

export const generateReport = async (result, report) => {
  try {
    var ws = XLSX.utils.json_to_sheet(result);

    var wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Prova");

    const wbout = XLSX.write(wb, { type: "binary", bookType: "xlsx" });

    const folder = "Reports";

    const DirectoryPath = RNFS.ExternalDirectoryPath + "/" + folder;

    if (!RNFS.exists(DirectoryPath)) {
      await RNFS.mkdir(DirectoryPath);
    }

    let fileName;
    if (report === "order")
      fileName = `Order_Report_${moment().format("DD_MMM_YYYY_hhmmss")}.xlsx`;

    if (report === "transaction")
      fileName = `Transaction_Report_${moment().format(
        "DD_MMM_YYYY_hhmmss"
      )}.xlsx`;

    if (report === "settlement")
      fileName = `Settlement_Report_${moment().format(
        "DD_MMM_YYYY_hhmmss"
      )}.xlsx`;

    if (report === "product")
      fileName = `Product_Report_${moment().format("DD_MMM_YYYY_hhmmss")}.xlsx`;

    var file = RNFS.ExternalDirectoryPath + "/" + folder + `/${fileName}`;

    const res = await RNFS.writeFile(file, wbout, "ascii");
  } catch (err) {}
};

export const generateOrderReport = async (result) => {
  try {
    var ws = XLSX.utils.json_to_sheet(result);

    var wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Prova");

    const wbout = XLSX.write(wb, { type: "binary", bookType: "xlsx" });

    const folder = "Reports";
    const innerFolder = "Order";

    const DirectoryPath = RNFS.ExternalDirectoryPath + "/" + folder;

    const DirectoryPath2 =
      RNFS.ExternalDirectoryPath + "/" + folder + "/" + innerFolder;

    if (!RNFS.exists(DirectoryPath2)) {
      await RNFS.mkdir(DirectoryPath2);
    }
    let fileName = `Order_Report_${moment().format("DD_MMM_YYYY_hhmmss")}.xlsx`;

    var file =
      RNFS.ExternalDirectoryPath +
      "/" +
      folder +
      "/" +
      innerFolder +
      `/${fileName}`;

    const res = await RNFS.writeFile(file, wbout, "ascii");
  } catch (err) {}
};

export const generateProductReport = async (result) => {
  try {
    var ws = XLSX.utils.json_to_sheet(result);

    var wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Prova");

    const wbout = XLSX.write(wb, { type: "binary", bookType: "xlsx" });

    const folder = "Reports";
    const innerFolder = "Product";

    const DirectoryPath = RNFS.ExternalDirectoryPath + "/" + folder;

    const DirectoryPath2 =
      RNFS.ExternalDirectoryPath + "/" + folder + "/" + innerFolder;
    if (!RNFS.exists(DirectoryPath2)) {
      await RNFS.mkdir(DirectoryPath2);
    }

    let fileName = `Product_Report_${moment().format(
      "DD_MMM_YYYY_hhmmss"
    )}.xlsx`;

    var file =
      RNFS.ExternalDirectoryPath +
      "/" +
      folder +
      "/" +
      innerFolder +
      `/${fileName}`;

    const res = await RNFS.writeFile(file, wbout, "ascii");
  } catch (err) {}
};

export const generateTransactionReport = async (result) => {
  try {
    var ws = XLSX.utils.json_to_sheet(result);

    var wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Prova");

    const wbout = XLSX.write(wb, { type: "binary", bookType: "xlsx" });

    const folder = "Reports";
    const innerFolder = "Transaction";

    const DirectoryPath = RNFS.ExternalDirectoryPath + "/" + folder;
    await RNFS.mkdir(DirectoryPath);

    const DirectoryPath2 =
      RNFS.ExternalDirectoryPath + "/" + folder + "/" + innerFolder;
    if (!RNFS.exists(DirectoryPath2)) {
      await RNFS.mkdir(DirectoryPath2);
    }

    let fileName = `Transaction_Report_${moment().format(
      "DD_MMM_YYYY_hhmmss"
    )}.xlsx`;

    var file =
      RNFS.ExternalDirectoryPath +
      "/" +
      folder +
      "/" +
      innerFolder +
      `/${fileName}`;

    const res = await RNFS.writeFile(file, wbout, "ascii");
  } catch (err) {}
};

export const generateSettlementReport = async (result) => {
  try {
    var ws = XLSX.utils.json_to_sheet(result);

    var wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Prova");

    const wbout = XLSX.write(wb, { type: "binary", bookType: "xlsx" });

    const folder = "Reports";
    const innerFolder = "Settlement";

    const DirectoryPath = RNFS.ExternalDirectoryPath + "/" + folder;
    await RNFS.mkdir(DirectoryPath);

    const DirectoryPath2 =
      RNFS.ExternalDirectoryPath + "/" + folder + "/" + innerFolder;
    if (!RNFS.exists(DirectoryPath2)) {
      await RNFS.mkdir(DirectoryPath2);
    }

    let fileName = `Settlement_Report_${moment().format(
      "DD_MMM_YYYY_hhmmss"
    )}.xlsx`;

    var file =
      RNFS.ExternalDirectoryPath +
      "/" +
      folder +
      "/" +
      innerFolder +
      `/${fileName}`;

    const res = await RNFS.writeFile(file, wbout, "ascii");
  } catch (err) {}
};
