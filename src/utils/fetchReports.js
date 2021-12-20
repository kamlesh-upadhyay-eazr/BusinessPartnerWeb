import RNFS from "react-native-fs";

export default fetchReports = async () => {
  let reports = {};

  try {
    if (await RNFS.exists(RNFS.ExternalDirectoryPath + "/" + "Reports")) {
      // const order =
      //   RNFS.ExternalDirectoryPath + '/' + 'Reports' + '/' + 'Order';
      // const product =
      //   RNFS.ExternalDirectoryPath + '/' + 'Reports' + '/' + 'Product';
      // const settlement =
      //   RNFS.ExternalDirectoryPath + '/' + 'Reports' + '/' + 'Settlement';
      // const transaction =
      //   RNFS.ExternalDirectoryPath + '/' + 'Reports' + '/' + 'Transaction';
      // if (RNFS.exists(order)) {
      //   reports.orderReports = await RNFS.readDir(order);
      // } else {
      //   await RNFS.mkdir(
      //     RNFS.ExternalDirectoryPath + '/' + 'Reports' + '/' + 'Order',
      //   );
      // }
      // if (await RNFS.exists(product)) {
      //   reports.productReports = await RNFS.readDir(product);
      // } else {
      //   await RNFS.mkdir(RNFS.ExternalDirectoryPath + '/' + 'Reports/Product');
      // }
      // if (await RNFS.exists(transaction)) {
      //   reports.transactionReports = await RNFS.readDir(transaction);
      // } else {
      //   await RNFS.mkdir(
      //     RNFS.ExternalDirectoryPath + '/' + 'Reports/Transaction',
      //   );
      // }
      // if (await RNFS.exists(settlement)) {
      //   reports.settlementReports = await RNFS.readDir(settlement);
      // } else {
      //   await RNFS.mkdir(
      //     RNFS.ExternalDirectoryPath + '/' + 'Reports/Settlement',
      //   );
      // }

      reports = await RNFS.readDir(
        RNFS.ExternalDirectoryPath + "/" + "Reports"
      );
    } else {
      await RNFS.mkdir(RNFS.ExternalDirectoryPath + "/" + "Reports");
      // await RNFS.mkdir(RNFS.ExternalDirectoryPath + '/' + 'Reports/Order');
      // await RNFS.mkdir(RNFS.ExternalDirectoryPath + '/' + 'Reports/Product');
      // await RNFS.mkdir(RNFS.ExternalDirectoryPath + '/' + 'Reports/Settlement');
      //   await RNFS.mkdir(
      //     RNFS.ExternalDirectoryPath + '/' + 'Reports/Transaction',
      //   );
    }
    return { reports };
  } catch (err) {
    return { err };
  }
};
