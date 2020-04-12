/**
 * File Header - O1 Record
 * 
 */

import BTRS_Code from "./BTRS_Code"
import BTRS_Record from "./BTRS_Record";

class BTRS_FileHeader extends BTRS_Record {
  static code: BTRS_Code = BTRS_Code.FileHeader;
  constructor() {
    super(BTRS_FileHeader.code)
  }
}
export default BTRS_FileHeader;