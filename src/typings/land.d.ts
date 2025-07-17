declare namespace Land {
  /** 地块类型 */
  namespace LandEntering {
    /** 地块列表 */
    interface LandEnteringData {
      records: LandEnteringListItem[]
      current: number
      size: number
      total: number
    }

    /** 地块列表项 */
    interface LandEnteringListItem {
      id: number
      landNumber: string
      administrativeRegion: string
      planningNature: string
      status: number
      businessType: string
      landArea: number
    }
  }
}
