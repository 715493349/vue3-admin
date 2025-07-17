declare namespace Business {
  /** 楼宇类型 */
  namespace BusinessDataList {
    /** 楼宇列表 */
    interface BusinessData {
      records: BusinessDataItem[]
      current: number
      size: number
      total: number
    }

    /** 楼宇列表项 */
    interface BusinessDataItem {
      id: number
      businessNumber: string //  楼宇资源编号: string
      businessName: string //  楼宇资源名称: string
      administrativeRegion: string //  行政区: string
      officeArea: string //  办公面积
      totalBuildingArea: string //  总建筑面积（平方米）
      status: string //  状态: string
    }
  }
}
