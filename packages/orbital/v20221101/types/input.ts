import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * The reference to the contact profile resource.
     */
    export interface ContactParametersContactProfile {
        /**
         * Resource ID.
         */
        id: string;
    }

    /**
     * The reference to the contact profile resource.
     */
    export interface ContactParametersContactProfileArgs {
        /**
         * Resource ID.
         */
        id: pulumi.Input<string>;
    }

    /**
     * Contact Profile Link.
     */
    export interface ContactProfileLinkArgs {
        /**
         * Contact Profile Link Channel.
         */
        channels: pulumi.Input<pulumi.Input<ContactProfileLinkChannelArgs>[]>;
        /**
         * Direction (Uplink or Downlink).
         */
        direction: pulumi.Input<string | enums.Direction>;
        /**
         * Effective Isotropic Radiated Power (EIRP) in dBW. It is the required EIRP by the customer. Not used yet.
         */
        eirpdBW?: pulumi.Input<number>;
        /**
         * Gain to noise temperature in db/K. It is the required G/T by the customer. Not used yet.
         */
        gainOverTemperature?: pulumi.Input<number>;
        /**
         * Link name.
         */
        name: pulumi.Input<string>;
        /**
         * Polarization. e.g. (RHCP, LHCP).
         */
        polarization: pulumi.Input<string | enums.Polarization>;
    }

    /**
     * Contact Profile Link Channel.
     */
    export interface ContactProfileLinkChannelArgs {
        /**
         * Bandwidth in MHz.
         */
        bandwidthMHz: pulumi.Input<number>;
        /**
         * Center Frequency in MHz.
         */
        centerFrequencyMHz: pulumi.Input<number>;
        /**
         * Currently unused.
         */
        decodingConfiguration?: pulumi.Input<string>;
        /**
         * Copy of the modem configuration file such as Kratos QRadio or Kratos QuantumRx. Only valid for downlink directions. If provided, the modem connects to the customer endpoint and sends demodulated data instead of a VITA.49 stream.
         */
        demodulationConfiguration?: pulumi.Input<string>;
        /**
         * Currently unused.
         */
        encodingConfiguration?: pulumi.Input<string>;
        /**
         * Customer end point to store and retrieve data during a contact with the spacecraft.
         */
        endPoint: pulumi.Input<EndPointArgs>;
        /**
         * Copy of the modem configuration file such as Kratos QRadio. Only valid for uplink directions. If provided, the modem connects to the customer endpoint and accepts commands from the customer instead of a VITA.49 stream.
         */
        modulationConfiguration?: pulumi.Input<string>;
        /**
         * Channel name.
         */
        name: pulumi.Input<string>;
    }

    /**
     * Contact Profile third-party partner configuration.
     */
    export interface ContactProfileThirdPartyConfigurationArgs {
        /**
         * Name of string referencing the configuration describing contact set-up for a particular mission. Expected values are those which have been created in collaboration with the partner network.
         */
        missionConfiguration: pulumi.Input<string>;
        /**
         * Name of the third-party provider.
         */
        providerName: pulumi.Input<string>;
    }

    /**
     * Network configuration of customer virtual network.
     */
    export interface ContactProfilesPropertiesNetworkConfigurationArgs {
        /**
         * ARM resource identifier of the subnet delegated to the Microsoft.Orbital/orbitalGateways. Needs to be at least a class C subnet, and should not have any IP created in it.
         */
        subnetId: pulumi.Input<string>;
    }

    /**
     * The reference to the contact profile resource.
     */
    export interface ContactsPropertiesContactProfileArgs {
        /**
         * Resource ID.
         */
        id: pulumi.Input<string>;
    }

    /**
     * Customer end point to store and retrieve data during a contact with the spacecraft.
     */
    export interface EndPointArgs {
        /**
         * Name of an end point.
         */
        endPointName: pulumi.Input<string>;
        /**
         * IP Address (IPv4).
         */
        ipAddress: pulumi.Input<string>;
        /**
         * TCP port to listen on to receive data.
         */
        port: pulumi.Input<string>;
        /**
         * Protocol either UDP or TCP.
         */
        protocol: pulumi.Input<string | enums.Protocol>;
    }

    /**
     * List of authorized spacecraft links per ground station and the expiration date of the authorization.
     */
    export interface SpacecraftLinkArgs {
        /**
         * Bandwidth in MHz.
         */
        bandwidthMHz: pulumi.Input<number>;
        /**
         * Center Frequency in MHz.
         */
        centerFrequencyMHz: pulumi.Input<number>;
        /**
         * Direction (Uplink or Downlink).
         */
        direction: pulumi.Input<string | enums.Direction>;
        /**
         * Link name.
         */
        name: pulumi.Input<string>;
        /**
         * Polarization. e.g. (RHCP, LHCP).
         */
        polarization: pulumi.Input<string | enums.Polarization>;
    }
