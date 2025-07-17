declare namespace MultiSpace {
  /** 多元空间类型 */
  namespace MultiSpaceDataList {
    /** 多元空间列表 */
    interface MultiSpaceData {
      records: MultiSpaceDataItem[]
      current: number
      size: number
      total: number
    }

    /** 多元空间列表项 */
    interface MultiSpaceDataItem {
      id: number
      industrySpaceNumber: string //空间资源编号
      industrySpaceName: string //空间资源名称
      administrativeRegion: string //行政区
      spaceType: string //空间类型
      roomArea: string //房间面积
      totalBuildingArea: string // 总建筑面积
      status: number
    }
  }
}
