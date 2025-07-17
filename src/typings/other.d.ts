declare namespace OtherResource {
  /** 其他资源类型 */
  namespace OtherResourceDataList {
    /** 其他资源列表 */
    interface OtherResourceData {
      records: OtherResourceDataItem[]
      current: number
      size: number
      total: number
    }

    /** 其他资源列表项 */
    interface OtherResourceDataItem {
      id: number
      resourceNumber: string //资源编号
      resourceName: string //资源名称
      administrativeRegion: string //行政区
      resourceArea: string //资源面积
      status: number
    }
  }
}
