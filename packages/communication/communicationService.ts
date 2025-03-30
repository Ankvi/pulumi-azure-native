import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * A class representing a CommunicationService resource.
 *
 * Uses Azure REST API version 2023-03-31. In version 1.x of the Azure Native provider, it used API version 2020-08-20.
 *
 * Other available API versions: 2023-04-01, 2023-04-01-preview, 2023-06-01-preview, 2024-09-01-preview.
 */
export class CommunicationService extends pulumi.CustomResource {
    /**
     * Get an existing CommunicationService resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): CommunicationService {
        return new CommunicationService(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:communication:CommunicationService';

    /**
     * Returns true if the given object is an instance of CommunicationService.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CommunicationService {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CommunicationService.__pulumiType;
    }

    /**
     * The location where the communication service stores its data at rest.
     */
    public readonly dataLocation!: pulumi.Output<string>;
    /**
     * FQDN of the CommunicationService instance.
     */
    public /*out*/ readonly hostName!: pulumi.Output<string>;
    /**
     * The immutable resource Id of the communication service.
     */
    public /*out*/ readonly immutableResourceId!: pulumi.Output<string>;
    /**
     * List of email Domain resource Ids.
     */
    public readonly linkedDomains!: pulumi.Output<string[] | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Resource ID of an Azure Notification Hub linked to this resource.
     */
    public /*out*/ readonly notificationHubId!: pulumi.Output<string>;
    /**
     * Provisioning state of the resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Version of the CommunicationService resource. Probably you need the same or higher version of client SDKs.
     */
    public /*out*/ readonly version!: pulumi.Output<string>;

    /**
     * Create a CommunicationService resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CommunicationServiceArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.dataLocation === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dataLocation'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["communicationServiceName"] = args ? args.communicationServiceName : undefined;
            resourceInputs["dataLocation"] = args ? args.dataLocation : undefined;
            resourceInputs["linkedDomains"] = args ? args.linkedDomains : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["hostName"] = undefined /*out*/;
            resourceInputs["immutableResourceId"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["notificationHubId"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        } else {
            resourceInputs["dataLocation"] = undefined /*out*/;
            resourceInputs["hostName"] = undefined /*out*/;
            resourceInputs["immutableResourceId"] = undefined /*out*/;
            resourceInputs["linkedDomains"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["notificationHubId"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:communication/v20200820:CommunicationService" }, { type: "azure-native:communication/v20200820preview:CommunicationService" }, { type: "azure-native:communication/v20211001preview:CommunicationService" }, { type: "azure-native:communication/v20220701preview:CommunicationService" }, { type: "azure-native:communication/v20230301preview:CommunicationService" }, { type: "azure-native:communication/v20230331:CommunicationService" }, { type: "azure-native:communication/v20230401:CommunicationService" }, { type: "azure-native:communication/v20230401preview:CommunicationService" }, { type: "azure-native:communication/v20230601preview:CommunicationService" }, { type: "azure-native:communication/v20240901preview:CommunicationService" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(CommunicationService.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a CommunicationService resource.
 */
export interface CommunicationServiceArgs {
    /**
     * The name of the CommunicationService resource.
     */
    communicationServiceName?: pulumi.Input<string>;
    /**
     * The location where the communication service stores its data at rest.
     */
    dataLocation: pulumi.Input<string>;
    /**
     * List of email Domain resource Ids.
     */
    linkedDomains?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}