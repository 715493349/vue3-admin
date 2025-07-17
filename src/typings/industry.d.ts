declare namespace Industry {
  /** 产业类型 */
  namespace IndustryEntering {
    /** 产业列表 */
    interface IndustryEnteringData {
      records: IndustryListItem[]
      current: number
      size: number
      total: number
    }

    /** 产业列表项 */
    interface IndustryListItem {
      id: number
      industrySpaceNumber: string // 空间资源编号
      industrySpaceName: string // 空间资源名称
      administrativeRegion: string // 行政区
      commercialArea: string // 商业面积（平方米）
      totalBuildingArea: string // 总建筑面积（平方米）
      status: string // 状态
    }
  }
}
