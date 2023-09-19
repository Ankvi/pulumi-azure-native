import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Firmware definition
 */
export class Firmware extends pulumi.CustomResource {
    /**
     * Get an existing Firmware resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Firmware {
        return new Firmware(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:iotfirmwaredefense/v20230208preview:Firmware';

    /**
     * Returns true if the given object is an instance of Firmware.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Firmware {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Firmware.__pulumiType;
    }

    /**
     * User-specified description of the firmware.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * File name for a firmware that user uploaded.
     */
    public readonly fileName!: pulumi.Output<string | undefined>;
    /**
     * File size of the uploaded firmware image.
     */
    public readonly fileSize!: pulumi.Output<number | undefined>;
    /**
     * Firmware model.
     */
    public readonly model!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Provisioning state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The status of firmware scan.
     */
    public readonly status!: pulumi.Output<string | undefined>;
    /**
     * A list of errors or other messages generated during firmware analysis
     */
    public readonly statusMessages!: pulumi.Output<any[] | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Firmware vendor.
     */
    public readonly vendor!: pulumi.Output<string | undefined>;
    /**
     * Firmware version.
     */
    public readonly version!: pulumi.Output<string | undefined>;

    /**
     * Create a Firmware resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FirmwareArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.workspaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceName'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["fileName"] = args ? args.fileName : undefined;
            resourceInputs["fileSize"] = args ? args.fileSize : undefined;
            resourceInputs["firmwareId"] = args ? args.firmwareId : undefined;
            resourceInputs["model"] = args ? args.model : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["status"] = (args ? args.status : undefined) ?? "Pending";
            resourceInputs["statusMessages"] = args ? args.statusMessages : undefined;
            resourceInputs["vendor"] = args ? args.vendor : undefined;
            resourceInputs["version"] = args ? args.version : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["fileName"] = undefined /*out*/;
            resourceInputs["fileSize"] = undefined /*out*/;
            resourceInputs["model"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["statusMessages"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["vendor"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:iotfirmwaredefense:Firmware" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Firmware.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Firmware resource.
 */
export interface FirmwareArgs {
    /**
     * User-specified description of the firmware.
     */
    description?: pulumi.Input<string>;
    /**
     * File name for a firmware that user uploaded.
     */
    fileName?: pulumi.Input<string>;
    /**
     * File size of the uploaded firmware image.
     */
    fileSize?: pulumi.Input<number>;
    /**
     * The id of the firmware.
     */
    firmwareId?: pulumi.Input<string>;
    /**
     * Firmware model.
     */
    model?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The status of firmware scan.
     */
    status?: pulumi.Input<string | types.enums.Status>;
    /**
     * A list of errors or other messages generated during firmware analysis
     */
    statusMessages?: pulumi.Input<any[]>;
    /**
     * Firmware vendor.
     */
    vendor?: pulumi.Input<string>;
    /**
     * Firmware version.
     */
    version?: pulumi.Input<string>;
    /**
     * The name of the firmware analysis workspace.
     */
    workspaceName: pulumi.Input<string>;
}
