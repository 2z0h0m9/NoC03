var CPacketPlayer = Java.type("net.minecraft.network.play.client.CPacketPlayer");

var script = registerScript({
    name: "NoC03",
    version: "1.0.0",
    authors: ["Messenger", "2z0h0m9"]
});

script.registerModule({
    name: "NoC03",
    category: "Misc",
    description: "noc03"
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
