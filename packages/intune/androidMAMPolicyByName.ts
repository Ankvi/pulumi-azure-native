import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Android Policy entity for Intune MAM.
 *
 * Uses Azure REST API version 2015-01-14-preview. In version 2.x of the Azure Native provider, it used API version 2015-01-14-preview.
 */
export class AndroidMAMPolicyByName extends pulumi.CustomResource {
    /**
     * Get an existing AndroidMAMPolicyByName resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): AndroidMAMPolicyByName {
        return new AndroidMAMPolicyByName(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:intune:AndroidMAMPolicyByName';

    /**
     * Returns true if the given object is an instance of AndroidMAMPolicyByName.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AndroidMAMPolicyByName {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AndroidMAMPolicyByName.__pulumiType;
    }

    public readonly accessRecheckOfflineTimeout!: pulumi.Output<string | undefined>;
    public readonly accessRecheckOnlineTimeout!: pulumi.Output<string | undefined>;
    public readonly appSharingFromLevel!: pulumi.Output<string | undefined>;
    public readonly appSharingToLevel!: pulumi.Output<string | undefined>;
    public readonly authentication!: pulumi.Output<string | undefined>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    public readonly clipboardSharingLevel!: pulumi.Output<string | undefined>;
    public readonly dataBackup!: pulumi.Output<string | undefined>;
    public readonly description!: pulumi.Output<string | undefined>;
    public readonly deviceCompliance!: pulumi.Output<string | undefined>;
    public readonly fileEncryption!: pulumi.Output<string | undefined>;
    public readonly fileSharingSaveAs!: pulumi.Output<string | undefined>;
    public readonly friendlyName!: pulumi.Output<string>;
    public /*out*/ readonly groupStatus!: pulumi.Output<string>;
    public /*out*/ readonly lastModifiedTime!: pulumi.Output<string>;
    /**
     * Resource Location
     */
    public readonly location!: pulumi.Output<string | undefined>;
    public readonly managedBrowser!: pulumi.Output<string | undefined>;
    /**
     * Resource name
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    public /*out*/ readonly numOfApps!: pulumi.Output<number>;
    public readonly offlineWipeTimeout!: pulumi.Output<string | undefined>;
    public readonly pin!: pulumi.Output<string | undefined>;
    public readonly pinNumRetry!: pulumi.Output<number | undefined>;
    public readonly screenCapture!: pulumi.Output<string | undefined>;
    /**
     * Resource Tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a AndroidMAMPolicyByName resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AndroidMAMPolicyByNameArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.friendlyName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'friendlyName'");
            }
            if ((!args || args.hostName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'hostName'");
            }
            resourceInputs["accessRecheckOfflineTimeout"] = args ? args.accessRecheckOfflineTimeout : undefined;
            resourceInputs["accessRecheckOnlineTimeout"] = args ? args.accessRecheckOnlineTimeout : undefined;
            resourceInputs["appSharingFromLevel"] = (args ? args.appSharingFromLevel : undefined) ?? "none";
            resourceInputs["appSharingToLevel"] = (args ? args.appSharingToLevel : undefined) ?? "none";
            resourceInputs["authentication"] = (args ? args.authentication : undefined) ?? "required";
            resourceInputs["clipboardSharingLevel"] = (args ? args.clipboardSharingLevel : undefined) ?? "blocked";
            resourceInputs["dataBackup"] = (args ? args.dataBackup : undefined) ?? "allow";
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["deviceCompliance"] = (args ? args.deviceCompliance : undefined) ?? "enable";
            resourceInputs["fileEncryption"] = (args ? args.fileEncryption : undefined) ?? "required";
            resourceInputs["fileSharingSaveAs"] = (args ? args.fileSharingSaveAs : undefined) ?? "allow";
            resourceInputs["friendlyName"] = args ? args.friendlyName : undefined;
            resourceInputs["hostName"] = args ? args.hostName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["managedBrowser"] = (args ? args.managedBrowser : undefined) ?? "required";
            resourceInputs["offlineWipeTimeout"] = args ? args.offlineWipeTimeout : undefined;
            resourceInputs["pin"] = (args ? args.pin : undefined) ?? "required";
            resourceInputs["pinNumRetry"] = args ? args.pinNumRetry : undefined;
            resourceInputs["policyName"] = args ? args.policyName : undefined;
            resourceInputs["screenCapture"] = (args ? args.screenCapture : undefined) ?? "allow";
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["groupStatus"] = undefined /*out*/;
            resourceInputs["lastModifiedTime"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["numOfApps"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["accessRecheckOfflineTimeout"] = undefined /*out*/;
            resourceInputs["accessRecheckOnlineTimeout"] = undefined /*out*/;
            resourceInputs["appSharingFromLevel"] = undefined /*out*/;
            resourceInputs["appSharingToLevel"] = undefined /*out*/;
            resourceInputs["authentication"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["clipboardSharingLevel"] = undefined /*out*/;
            resourceInputs["dataBackup"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["deviceCompliance"] = undefined /*out*/;
            resourceInputs["fileEncryption"] = undefined /*out*/;
            resourceInputs["fileSharingSaveAs"] = undefined /*out*/;
            resourceInputs["friendlyName"] = undefined /*out*/;
            resourceInputs["groupStatus"] = undefined /*out*/;
            resourceInputs["lastModifiedTime"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["managedBrowser"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["numOfApps"] = undefined /*out*/;
            resourceInputs["offlineWipeTimeout"] = undefined /*out*/;
            resourceInputs["pin"] = undefined /*out*/;
            resourceInputs["pinNumRetry"] = undefined /*out*/;
            resourceInputs["screenCapture"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:intune/v20150114preview:AndroidMAMPolicyByName" }, { type: "azure-native:intune/v20150114privatepreview:AndroidMAMPolicyByName" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(AndroidMAMPolicyByName.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a AndroidMAMPolicyByName resource.
 */
export interface AndroidMAMPolicyByNameArgs {
    accessRecheckOfflineTimeout?: pulumi.Input<string>;
    accessRecheckOnlineTimeout?: pulumi.Input<string>;
    appSharingFromLevel?: pulumi.Input<string>;
    appSharingToLevel?: pulumi.Input<string>;
    authentication?: pulumi.Input<string>;
    clipboardSharingLevel?: pulumi.Input<string>;
    dataBackup?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    deviceCompliance?: pulumi.Input<string>;
    fileEncryption?: pulumi.Input<string>;
    fileSharingSaveAs?: pulumi.Input<string>;
    friendlyName: pulumi.Input<string>;
    /**
     * Location hostName for the tenant
     */
    hostName: pulumi.Input<string>;
    /**
     * Resource Location
     */
    location?: pulumi.Input<string>;
    managedBrowser?: pulumi.Input<string>;
    offlineWipeTimeout?: pulumi.Input<string>;
    pin?: pulumi.Input<string>;
    pinNumRetry?: pulumi.Input<number>;
    /**
     * Unique name for the policy
     */
    policyName?: pulumi.Input<string>;
    screenCapture?: pulumi.Input<string>;
    /**
     * Resource Tags
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}