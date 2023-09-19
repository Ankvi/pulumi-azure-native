import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Job Resource.
 */
export class Job extends pulumi.CustomResource {
    /**
     * Get an existing Job resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Job {
        return new Job(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:databox/v20221201:Job';

    /**
     * Returns true if the given object is an instance of Job.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Job {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Job.__pulumiType;
    }

    /**
     * Reason for cancellation.
     */
    public /*out*/ readonly cancellationReason!: pulumi.Output<string>;
    /**
     * Delivery Info of Job.
     */
    public readonly deliveryInfo!: pulumi.Output<types.outputs.JobDeliveryInfoResponse | undefined>;
    /**
     * Delivery type of Job.
     */
    public readonly deliveryType!: pulumi.Output<string | undefined>;
    /**
     * Details of a job run. This field will only be sent for expand details filter.
     */
    public readonly details!: pulumi.Output<types.outputs.DataBoxCustomerDiskJobDetailsResponse | types.outputs.DataBoxDiskJobDetailsResponse | types.outputs.DataBoxHeavyJobDetailsResponse | types.outputs.DataBoxJobDetailsResponse | undefined>;
    /**
     * Top level error for the job.
     */
    public /*out*/ readonly error!: pulumi.Output<types.outputs.CloudErrorResponse>;
    /**
     * Msi identity of the resource
     */
    public readonly identity!: pulumi.Output<types.outputs.ResourceIdentityResponse | undefined>;
    /**
     * Describes whether the job is cancellable or not.
     */
    public /*out*/ readonly isCancellable!: pulumi.Output<boolean>;
    /**
     * Flag to indicate cancellation of scheduled job.
     */
    public /*out*/ readonly isCancellableWithoutFee!: pulumi.Output<boolean>;
    /**
     * Describes whether the job is deletable or not.
     */
    public /*out*/ readonly isDeletable!: pulumi.Output<boolean>;
    /**
     * Is Prepare To Ship Enabled on this job
     */
    public /*out*/ readonly isPrepareToShipEnabled!: pulumi.Output<boolean>;
    /**
     * Describes whether the shipping address is editable or not.
     */
    public /*out*/ readonly isShippingAddressEditable!: pulumi.Output<boolean>;
    /**
     * The location of the resource. This will be one of the supported and registered Azure Regions (e.g. West US, East US, Southeast Asia, etc.). The region of a resource cannot be changed once it is created, but if an identical region is specified on update the request will succeed.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Name of the object.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The Editable status for Reverse Shipping Address and Contact Info
     */
    public /*out*/ readonly reverseShippingDetailsUpdate!: pulumi.Output<string>;
    /**
     * The Editable status for Reverse Transport preferences
     */
    public /*out*/ readonly reverseTransportPreferenceUpdate!: pulumi.Output<string>;
    /**
     * The sku type.
     */
    public readonly sku!: pulumi.Output<types.outputs.SkuResponse>;
    /**
     * Time at which the job was started in UTC ISO 8601 format.
     */
    public /*out*/ readonly startTime!: pulumi.Output<string>;
    /**
     * Name of the stage which is in progress.
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups).
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Type of the data transfer.
     */
    public readonly transferType!: pulumi.Output<string>;
    /**
     * Type of the object.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Job resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: JobArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.sku === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sku'");
            }
            if ((!args || args.transferType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'transferType'");
            }
            resourceInputs["deliveryInfo"] = args ? args.deliveryInfo : undefined;
            resourceInputs["deliveryType"] = (args ? args.deliveryType : undefined) ?? "NonScheduled";
            resourceInputs["details"] = args ? args.details : undefined;
            resourceInputs["identity"] = args ? (args.identity ? pulumi.output(args.identity).apply(types.inputs.resourceIdentityArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["jobName"] = args ? args.jobName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["transferType"] = args ? args.transferType : undefined;
            resourceInputs["cancellationReason"] = undefined /*out*/;
            resourceInputs["error"] = undefined /*out*/;
            resourceInputs["isCancellable"] = undefined /*out*/;
            resourceInputs["isCancellableWithoutFee"] = undefined /*out*/;
            resourceInputs["isDeletable"] = undefined /*out*/;
            resourceInputs["isPrepareToShipEnabled"] = undefined /*out*/;
            resourceInputs["isShippingAddressEditable"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["reverseShippingDetailsUpdate"] = undefined /*out*/;
            resourceInputs["reverseTransportPreferenceUpdate"] = undefined /*out*/;
            resourceInputs["startTime"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["cancellationReason"] = undefined /*out*/;
            resourceInputs["deliveryInfo"] = undefined /*out*/;
            resourceInputs["deliveryType"] = undefined /*out*/;
            resourceInputs["details"] = undefined /*out*/;
            resourceInputs["error"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["isCancellable"] = undefined /*out*/;
            resourceInputs["isCancellableWithoutFee"] = undefined /*out*/;
            resourceInputs["isDeletable"] = undefined /*out*/;
            resourceInputs["isPrepareToShipEnabled"] = undefined /*out*/;
            resourceInputs["isShippingAddressEditable"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["reverseShippingDetailsUpdate"] = undefined /*out*/;
            resourceInputs["reverseTransportPreferenceUpdate"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["startTime"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["transferType"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:databox:Job" }, { type: "azure-native:databox/v20180101:Job" }, { type: "azure-native:databox/v20190901:Job" }, { type: "azure-native:databox/v20200401:Job" }, { type: "azure-native:databox/v20201101:Job" }, { type: "azure-native:databox/v20210301:Job" }, { type: "azure-native:databox/v20210501:Job" }, { type: "azure-native:databox/v20210801preview:Job" }, { type: "azure-native:databox/v20211201:Job" }, { type: "azure-native:databox/v20220201:Job" }, { type: "azure-native:databox/v20220901:Job" }, { type: "azure-native:databox/v20221001:Job" }, { type: "azure-native:databox/v20230301:Job" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Job.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Job resource.
 */
export interface JobArgs {
    /**
     * Delivery Info of Job.
     */
    deliveryInfo?: pulumi.Input<types.inputs.JobDeliveryInfoArgs>;
    /**
     * Delivery type of Job.
     */
    deliveryType?: pulumi.Input<string | types.enums.JobDeliveryType>;
    /**
     * Details of a job run. This field will only be sent for expand details filter.
     */
    details?: pulumi.Input<types.inputs.DataBoxCustomerDiskJobDetailsArgs | types.inputs.DataBoxDiskJobDetailsArgs | types.inputs.DataBoxHeavyJobDetailsArgs | types.inputs.DataBoxJobDetailsArgs>;
    /**
     * Msi identity of the resource
     */
    identity?: pulumi.Input<types.inputs.ResourceIdentityArgs>;
    /**
     * The name of the job Resource within the specified resource group. job names must be between 3 and 24 characters in length and use any alphanumeric and underscore only
     */
    jobName?: pulumi.Input<string>;
    /**
     * The location of the resource. This will be one of the supported and registered Azure Regions (e.g. West US, East US, Southeast Asia, etc.). The region of a resource cannot be changed once it is created, but if an identical region is specified on update the request will succeed.
     */
    location?: pulumi.Input<string>;
    /**
     * The Resource Group Name
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The sku type.
     */
    sku: pulumi.Input<types.inputs.SkuArgs>;
    /**
     * The list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups).
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Type of the data transfer.
     */
    transferType: pulumi.Input<string | types.enums.TransferType>;
}
