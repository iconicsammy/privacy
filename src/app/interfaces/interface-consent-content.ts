export interface ConsentPlugin {
    ComplianceType: string;
    ComplianceTypeID: number;
    BlockingEnabled: boolean;
    PluginDomain: string;
    cName : string;
    optOutExternalLink? : string;
};

export interface ConsentDetail {
    Localization: string;
    CategoyId: number;
    CategoyHeading: string;
    IsMandatory: boolean;
    CategoyText : string;
    PluginList?: ConsentPlugin[];
    ExtraSettings?: any;
};

export interface ConsentContent {
    BannerId: number;
    accordian?: ConsentDetail[];
    Created : Date;
    LastUpdated: Date;
}
/*

*/