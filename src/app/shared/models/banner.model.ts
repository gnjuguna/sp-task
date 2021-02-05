export class Banner {

    BannerId!: number;
    accordian!: Array<Accordian>;
    Created!: string;
    LastUpdated!: string;
}


export class Accordian {

    Localization!: string;
    CategoyId!: number;
    CategoyHeading!: string;
    IsMandatory!: boolean;
    CategoyText!: string;
    PluginList!: Array<Plugin>;
    ExtraSettings!: string;
}


export class Plugin {
    ComplianceType!: string;
    ComplianceTypeID!: number;
    BlockingEnabled!: boolean;
    PluginDomain!: string;
    cName!: string;
    optOutExternalLink?: string;
};