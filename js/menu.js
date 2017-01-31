menuItems =
[
	{
		"type": "h1",
		"desc": "3x3x3"
	},
	{
		"type": "h2",
		"desc": "CFOP"
	},
	{
		"type": "submenu",
		"desc": "Beginner",
		"items":
		[
			{
				"type": "link",
				"desc": "2AOLL",
				"href": "2aoll.html"
			},
			{
				"type": "link",
				"desc": "2APLL",
				"href": "2apll.html"
			}
		]
	},
	{
		"type": "submenu",
		"desc": "Improver",
		"items":
		[
			{
				"type": "link",
				"desc": "4AOLL",
				"href": "4aoll.html"
			},
			{
				"type": "link",
				"desc": "3APLL",
				"href": "3apll.html"
			}
		]
	},
	{
		"type": "submenu",
		"desc": "Intermediate",
		"items":
		[
			{
				"type": "link",
				"desc": "2LOLL",
				"href": "2loll.html"
			},
			{
				"type": "link",
				"desc": "2LPLL",
				"href": "2lpll.html"
			}
		]
	},
	{
		"type": "submenu",
		"desc": "Advanced",
		"items":
		[
			{
				"type": "link",
				"desc": "OLL",
				"href": "oll.html"
			},
			{
				"type": "link",
				"desc": "COLL",
				"href": "coll.html"
			},
			{
				"type": "link",
				"desc": "PLL",
				"href": "pll.html"
			}
		]
	},
	{
		"type": "h2",
		"desc": "4LLL"
	},
	{
		"type": "submenu",
		"desc": "EO CO CP EP",
		"items":
		[
			{
				"type": "link",
				"desc": "2LOLL",
				"href": "2loll.html"
			},
			{
				"type": "link",
				"desc": "2LPLL",
				"href": "2lpll.html"
			}
		]
	},
	{
		"type": "submenu",
		"desc": "EO CP CO EP",
		"items":
		[
			{
				"type": "link",
				"desc": "2LCPEOLL",
				"href": "2lcpeoll.html"
			},
			{
				"type": "link",
				"desc": "2L2GLL",
				"href": "2l2gll.html"
			}
		]
	}
];

// Self-invoking function to populate the off screen navigation menu
var initMenu = (function ()
{
	function init()
	{
		try
		{
			// Top of navigation
			var out = "<nav class=\"pushy pushy-left\"><h1>Cube Algs</h1><ul>";
	
			// Iterate through the menu items
			for (var itemIdx = 0; itemIdx < menuItems.length; itemIdx++)
			{
				var menuItem = menuItems[itemIdx];
				
				switch (menuItem.type)
				{
					case "h1":
						out += "<li class=\"pushy-h1\">" + menuItem.desc + "</li>";
						break;
					case "h2":
						out += "<li class=\"pushy-h2\">" + menuItem.desc + "</li>";
						break;
					case "submenu":
						out += "<li class=\"pushy-submenu\"><span>" + menuItem.desc + "</span><ul>";
						for (var subIdx = 0; subIdx < menuItem.items.length; subIdx++)
						{
							var subItem = menuItem.items[subIdx];
							
							switch (subItem.type)
							{
								case "link":
									out += "<li class=\"pushy-link\"><a href=\"" + subItem.href + "\">" + subItem.desc + "</a></li>";
									break;
							}
						}
						out += "</ul></li>";
						break;
				}
			}

			// Tail of navigation
			out += "</ul></nav>";
			
			// Update the HTML
			document.getElementById("navigation").innerHTML = out;
		}
		catch (err)
		{
			// Errors are not expected but should not be fatal
			window.alert(err.message);
		}
	}

	return init;
})();