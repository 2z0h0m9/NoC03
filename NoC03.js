var CPacketPlayer = Java.type("net.minecraft.network.play.client.CPacketPlayer");

var script = registerScript({
    name: "NoC03",
    version: "1.0.0",
    authors: ["Messenger"]
});

script.registerModule({
    name: "NoC03",
    category: "Misc",
    description: "取消C03PacketPlayer移动发包"
}, function (module) {
	module.on("enable",
	function(event) {
		var packet = event.getPacket();
			if (packet instanceof CPacketPlayer){
				event.cancelEvent()
			}
		}
	)
});
