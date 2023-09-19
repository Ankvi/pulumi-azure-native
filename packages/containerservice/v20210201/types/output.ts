import * as enums from "./enums";
import * as pulumi from "@pulumi/pulumi";
    /**
     * Settings for upgrading an agentpool
     */
    export interface AgentPoolUpgradeSettingsResponse {
        /**
         * Count or percentage of additional nodes to be added during upgrade. If empty uses AKS default
         */
        maxSurge?: string;
    }

    /**
     * Kubelet configurations of agent nodes.
     */
    export interface KubeletConfigResponse {
        /**
         * Allowlist of unsafe sysctls or unsafe sysctl patterns (ending in `*`).
         */
        allowedUnsafeSysctls?: string[];
        /**
         * The maximum number of container log files that can be present for a container. The number must be ≥ 2.
         */
        containerLogMaxFiles?: number;
        /**
         * The maximum size (e.g. 10Mi) of container log file before it is rotated.
         */
        containerLogMaxSizeMB?: number;
        /**
         * Enable CPU CFS quota enforcement for containers that specify CPU limits.
         */
        cpuCfsQuota?: boolean;
        /**
         * Sets CPU CFS quota period value.
         */
        cpuCfsQuotaPeriod?: string;
        /**
         * CPU Manager policy to use.
         */
        cpuManagerPolicy?: string;
        /**
         * If set to true it will make the Kubelet fail to start if swap is enabled on the node.
         */
        failSwapOn?: boolean;
        /**
         * The percent of disk usage after which image garbage collection is always run.
         */
        imageGcHighThreshold?: number;
        /**
         * The percent of disk usage before which image garbage collection is never run.
         */
        imageGcLowThreshold?: number;
        /**
         * The maximum number of processes per pod.
         */
        podMaxPids?: number;
        /**
         * Topology Manager policy to use.
         */
        topologyManagerPolicy?: string;
    }

    /**
     * OS configurations of Linux agent nodes.
     */
    export interface LinuxOSConfigResponse {
        /**
         * SwapFileSizeMB specifies size in MB of a swap file will be created on each node.
         */
        swapFileSizeMB?: number;
        /**
         * Sysctl settings for Linux agent nodes.
         */
        sysctls?: SysctlConfigResponse;
        /**
         * Transparent Huge Page defrag configuration.
         */
        transparentHugePageDefrag?: string;
        /**
         * Transparent Huge Page enabled configuration.
         */
        transparentHugePageEnabled?: string;
    }

    /**
     * Describes the Power State of the cluster
     */
    export interface PowerStateResponse {
        /**
         * Tells whether the cluster is Running or Stopped
         */
        code?: string;
    }

    /**
     * Sysctl settings for Linux agent nodes.
     */
    export interface SysctlConfigResponse {
        /**
         * Sysctl setting fs.aio-max-nr.
         */
        fsAioMaxNr?: number;
        /**
         * Sysctl setting fs.file-max.
         */
        fsFileMax?: number;
        /**
         * Sysctl setting fs.inotify.max_user_watches.
         */
        fsInotifyMaxUserWatches?: number;
        /**
         * Sysctl setting fs.nr_open.
         */
        fsNrOpen?: number;
        /**
         * Sysctl setting kernel.threads-max.
         */
        kernelThreadsMax?: number;
        /**
         * Sysctl setting net.core.netdev_max_backlog.
         */
        netCoreNetdevMaxBacklog?: number;
        /**
         * Sysctl setting net.core.optmem_max.
         */
        netCoreOptmemMax?: number;
        /**
         * Sysctl setting net.core.rmem_default.
         */
        netCoreRmemDefault?: number;
        /**
         * Sysctl setting net.core.rmem_max.
         */
        netCoreRmemMax?: number;
        /**
         * Sysctl setting net.core.somaxconn.
         */
        netCoreSomaxconn?: number;
        /**
         * Sysctl setting net.core.wmem_default.
         */
        netCoreWmemDefault?: number;
        /**
         * Sysctl setting net.core.wmem_max.
         */
        netCoreWmemMax?: number;
        /**
         * Sysctl setting net.ipv4.ip_local_port_range.
         */
        netIpv4IpLocalPortRange?: string;
        /**
         * Sysctl setting net.ipv4.neigh.default.gc_thresh1.
         */
        netIpv4NeighDefaultGcThresh1?: number;
        /**
         * Sysctl setting net.ipv4.neigh.default.gc_thresh2.
         */
        netIpv4NeighDefaultGcThresh2?: number;
        /**
         * Sysctl setting net.ipv4.neigh.default.gc_thresh3.
         */
        netIpv4NeighDefaultGcThresh3?: number;
        /**
         * Sysctl setting net.ipv4.tcp_fin_timeout.
         */
        netIpv4TcpFinTimeout?: number;
        /**
         * Sysctl setting net.ipv4.tcp_keepalive_probes.
         */
        netIpv4TcpKeepaliveProbes?: number;
        /**
         * Sysctl setting net.ipv4.tcp_keepalive_time.
         */
        netIpv4TcpKeepaliveTime?: number;
        /**
         * Sysctl setting net.ipv4.tcp_max_syn_backlog.
         */
        netIpv4TcpMaxSynBacklog?: number;
        /**
         * Sysctl setting net.ipv4.tcp_max_tw_buckets.
         */
        netIpv4TcpMaxTwBuckets?: number;
        /**
         * Sysctl setting net.ipv4.tcp_tw_reuse.
         */
        netIpv4TcpTwReuse?: boolean;
        /**
         * Sysctl setting net.ipv4.tcp_keepalive_intvl.
         */
        netIpv4TcpkeepaliveIntvl?: number;
        /**
         * Sysctl setting net.netfilter.nf_conntrack_buckets.
         */
        netNetfilterNfConntrackBuckets?: number;
        /**
         * Sysctl setting net.netfilter.nf_conntrack_max.
         */
        netNetfilterNfConntrackMax?: number;
        /**
         * Sysctl setting vm.max_map_count.
         */
        vmMaxMapCount?: number;
        /**
         * Sysctl setting vm.swappiness.
         */
        vmSwappiness?: number;
        /**
         * Sysctl setting vm.vfs_cache_pressure.
         */
        vmVfsCachePressure?: number;
    }
