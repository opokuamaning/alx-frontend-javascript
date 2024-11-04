/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from "./interface";
import * as CRUD from "./crud";

const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
}

const rowId: RowID = CRUD.insertRow(row);
console.log(rowId);

const upDateRow: RowElement = { age: 23, ...row };

CRUD.upDateRow(rowId, upDateRow);
CRUD.deleteRow(rowId);