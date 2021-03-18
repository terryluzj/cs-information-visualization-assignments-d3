import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, F as onMount, z as afterUpdate, e as element, t as text, f as claim_element, g as children, j as claim_text, a as detach_dev, m as add_location, l as attr_dev, D as add_render_callback, o as insert_dev, p as append_dev, E as add_resize_listener, n as noop, C as binding_callbacks } from './client.a39b1d8a.js';
import { d as d3, n as getTopGameAverage, p as sum, o as ordinal, T as Tableau10, q as pie, r as arc, i as select } from './operation.6e105956.js';

/* src/routes/steam-game/PopularitySharePieChart.svelte generated by Svelte v3.35.0 */
const file = "src/routes/steam-game/PopularitySharePieChart.svelte";

function create_fragment(ctx) {
	let div;
	let h2;
	let t;
	let div_resize_listener;

	const block = {
		c: function create() {
			div = element("div");
			h2 = element("h2");
			t = text("Market Share");
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			h2 = claim_element(div_nodes, "H2", {});
			var h2_nodes = children(h2);
			t = claim_text(h2_nodes, "Market Share");
			h2_nodes.forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h2, file, 98, 4, 3173);
			attr_dev(div, "class", "pie svelte-1uas0xn");
			add_render_callback(() => /*div_elementresize_handler*/ ctx[10].call(div));
			add_location(div, file, 92, 0, 3043);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, h2);
			append_dev(h2, t);
			/*div_binding*/ ctx[9](div);
			div_resize_listener = add_resize_listener(div, /*div_elementresize_handler*/ ctx[10].bind(div));
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			/*div_binding*/ ctx[9](null);
			div_resize_listener();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("PopularitySharePieChart", slots, []);
	let pieChartEl;
	let pieChartWidth;
	let pieChartHeight;
	let { onMouseOver } = $$props;
	let { onMouseOut } = $$props;
	let { onClickChartArea } = $$props;
	let { focusedData } = $$props;
	let { selectedData } = $$props;
	let { rawData } = $$props;

	onMount(async () => {
		const topAverage = getTopGameAverage(rawData);
		const topSum = sum(topAverage, data => data.avg);
		const color = ordinal(Tableau10);
		const topAveragePie = pie().value(data => data.avg)(topAverage);
		const radius = Math.min(pieChartWidth, pieChartHeight) / 2;
		const arc$1 = arc().innerRadius(0).outerRadius(radius);

		select(pieChartEl).append("svg").attr("viewBox", [-pieChartWidth / 2, -pieChartHeight / 2, pieChartWidth, pieChartHeight]).append("g").selectAll("div").data(topAveragePie).enter().append("path").attr("d", arc$1).attr("fill", function (d, i) {
			const percentage = d.data.avg / topSum * 100;
			return percentage > 10 ? color(i) : "SlateGray";
		}).attr("stroke", "#f2f2f2").style("stroke-width", "1px").on("click", function (d, i) {
			onClickChartArea(d, { ...i.data, index: i.index });
		}).on("mouseover", function (d, i) {
			onMouseOver(d, { ...i.data, index: i.index });
		}).on("mouseout", function (d, i) {
			onMouseOut(d, { ...i.data, index: i.index });
		});

		select(pieChartEl).select("svg").selectAll("div").data(topAveragePie).enter().append("text").text(function (d) {
			const percentage = d.data.avg / topSum * 100;

			return percentage > 10
			? `${Math.round(percentage)}%`
			: undefined;
		}).attr("transform", function (d) {
			return "translate(" + arc$1.centroid(d) + ")";
		}).attr("font-size", "14").style("text-anchor", "middle").style("fill", "#f2f2f2");
	});

	afterUpdate(() => {
		const selectedGroup = [select(pieChartEl).selectAll("path")];
		const data = focusedData || selectedData;

		if (data) {
			selectedGroup.forEach(group => {
				group.filter((d, i) => i !== data.index).style("opacity", 0.5);
				group.filter((d, i) => i === data.index).style("opacity", 1);
			});
		} else {
			selectedGroup.forEach(group => {
				group.style("opacity", 1);
			});
		}
	});

	const writable_props = [
		"onMouseOver",
		"onMouseOut",
		"onClickChartArea",
		"focusedData",
		"selectedData",
		"rawData"
	];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<PopularitySharePieChart> was created with unknown prop '${key}'`);
	});

	function div_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			pieChartEl = $$value;
			$$invalidate(0, pieChartEl);
		});
	}

	function div_elementresize_handler() {
		pieChartWidth = this.clientWidth;
		pieChartHeight = this.clientHeight;
		$$invalidate(1, pieChartWidth);
		$$invalidate(2, pieChartHeight);
	}

	$$self.$$set = $$props => {
		if ("onMouseOver" in $$props) $$invalidate(3, onMouseOver = $$props.onMouseOver);
		if ("onMouseOut" in $$props) $$invalidate(4, onMouseOut = $$props.onMouseOut);
		if ("onClickChartArea" in $$props) $$invalidate(5, onClickChartArea = $$props.onClickChartArea);
		if ("focusedData" in $$props) $$invalidate(6, focusedData = $$props.focusedData);
		if ("selectedData" in $$props) $$invalidate(7, selectedData = $$props.selectedData);
		if ("rawData" in $$props) $$invalidate(8, rawData = $$props.rawData);
	};

	$$self.$capture_state = () => ({
		d3,
		onMount,
		afterUpdate,
		getTopGameAverage,
		pieChartEl,
		pieChartWidth,
		pieChartHeight,
		onMouseOver,
		onMouseOut,
		onClickChartArea,
		focusedData,
		selectedData,
		rawData
	});

	$$self.$inject_state = $$props => {
		if ("pieChartEl" in $$props) $$invalidate(0, pieChartEl = $$props.pieChartEl);
		if ("pieChartWidth" in $$props) $$invalidate(1, pieChartWidth = $$props.pieChartWidth);
		if ("pieChartHeight" in $$props) $$invalidate(2, pieChartHeight = $$props.pieChartHeight);
		if ("onMouseOver" in $$props) $$invalidate(3, onMouseOver = $$props.onMouseOver);
		if ("onMouseOut" in $$props) $$invalidate(4, onMouseOut = $$props.onMouseOut);
		if ("onClickChartArea" in $$props) $$invalidate(5, onClickChartArea = $$props.onClickChartArea);
		if ("focusedData" in $$props) $$invalidate(6, focusedData = $$props.focusedData);
		if ("selectedData" in $$props) $$invalidate(7, selectedData = $$props.selectedData);
		if ("rawData" in $$props) $$invalidate(8, rawData = $$props.rawData);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		pieChartEl,
		pieChartWidth,
		pieChartHeight,
		onMouseOver,
		onMouseOut,
		onClickChartArea,
		focusedData,
		selectedData,
		rawData,
		div_binding,
		div_elementresize_handler
	];
}

class PopularitySharePieChart extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance, create_fragment, safe_not_equal, {
			onMouseOver: 3,
			onMouseOut: 4,
			onClickChartArea: 5,
			focusedData: 6,
			selectedData: 7,
			rawData: 8
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "PopularitySharePieChart",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*onMouseOver*/ ctx[3] === undefined && !("onMouseOver" in props)) {
			console.warn("<PopularitySharePieChart> was created without expected prop 'onMouseOver'");
		}

		if (/*onMouseOut*/ ctx[4] === undefined && !("onMouseOut" in props)) {
			console.warn("<PopularitySharePieChart> was created without expected prop 'onMouseOut'");
		}

		if (/*onClickChartArea*/ ctx[5] === undefined && !("onClickChartArea" in props)) {
			console.warn("<PopularitySharePieChart> was created without expected prop 'onClickChartArea'");
		}

		if (/*focusedData*/ ctx[6] === undefined && !("focusedData" in props)) {
			console.warn("<PopularitySharePieChart> was created without expected prop 'focusedData'");
		}

		if (/*selectedData*/ ctx[7] === undefined && !("selectedData" in props)) {
			console.warn("<PopularitySharePieChart> was created without expected prop 'selectedData'");
		}

		if (/*rawData*/ ctx[8] === undefined && !("rawData" in props)) {
			console.warn("<PopularitySharePieChart> was created without expected prop 'rawData'");
		}
	}

	get onMouseOver() {
		throw new Error("<PopularitySharePieChart>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set onMouseOver(value) {
		throw new Error("<PopularitySharePieChart>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get onMouseOut() {
		throw new Error("<PopularitySharePieChart>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set onMouseOut(value) {
		throw new Error("<PopularitySharePieChart>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get onClickChartArea() {
		throw new Error("<PopularitySharePieChart>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set onClickChartArea(value) {
		throw new Error("<PopularitySharePieChart>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get focusedData() {
		throw new Error("<PopularitySharePieChart>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set focusedData(value) {
		throw new Error("<PopularitySharePieChart>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get selectedData() {
		throw new Error("<PopularitySharePieChart>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set selectedData(value) {
		throw new Error("<PopularitySharePieChart>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get rawData() {
		throw new Error("<PopularitySharePieChart>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set rawData(value) {
		throw new Error("<PopularitySharePieChart>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default PopularitySharePieChart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUG9wdWxhcml0eVNoYXJlUGllQ2hhcnQuZDZiMmYyYmQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvc3RlYW0tZ2FtZS9Qb3B1bGFyaXR5U2hhcmVQaWVDaGFydC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbiAgICBpbXBvcnQgKiBhcyBkMyBmcm9tICdkMyc7XG4gICAgaW1wb3J0IHsgb25Nb3VudCwgYWZ0ZXJVcGRhdGUgfSBmcm9tICdzdmVsdGUnO1xuICAgIGltcG9ydCB7IGdldFRvcEdhbWVBdmVyYWdlIH0gZnJvbSAnLi9vcGVyYXRpb24nO1xuXG4gICAgbGV0IHBpZUNoYXJ0RWw7XG4gICAgbGV0IHBpZUNoYXJ0V2lkdGg7XG4gICAgbGV0IHBpZUNoYXJ0SGVpZ2h0O1xuXG4gICAgZXhwb3J0IGxldCBvbk1vdXNlT3ZlcjtcbiAgICBleHBvcnQgbGV0IG9uTW91c2VPdXQ7XG4gICAgZXhwb3J0IGxldCBvbkNsaWNrQ2hhcnRBcmVhO1xuXG4gICAgZXhwb3J0IGxldCBmb2N1c2VkRGF0YTtcbiAgICBleHBvcnQgbGV0IHNlbGVjdGVkRGF0YTtcbiAgICBleHBvcnQgbGV0IHJhd0RhdGE7XG5cbiAgICBvbk1vdW50KGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgdG9wQXZlcmFnZSA9IGdldFRvcEdhbWVBdmVyYWdlKHJhd0RhdGEpO1xuICAgICAgICBjb25zdCB0b3BTdW0gPSBkMy5zdW0odG9wQXZlcmFnZSwgKGRhdGEpID0+IGRhdGEuYXZnKTtcblxuICAgICAgICBjb25zdCBjb2xvciA9IGQzLnNjYWxlT3JkaW5hbChkMy5zY2hlbWVUYWJsZWF1MTApO1xuICAgICAgICBjb25zdCB0b3BBdmVyYWdlUGllID0gZDMucGllKCkudmFsdWUoKGRhdGEpID0+IGRhdGEuYXZnKSh0b3BBdmVyYWdlKTtcbiAgICAgICAgY29uc3QgcmFkaXVzID0gTWF0aC5taW4ocGllQ2hhcnRXaWR0aCwgcGllQ2hhcnRIZWlnaHQpIC8gMjtcbiAgICAgICAgY29uc3QgYXJjID0gZDMuYXJjKCkuaW5uZXJSYWRpdXMoMCkub3V0ZXJSYWRpdXMocmFkaXVzKTtcblxuICAgICAgICBkMy5zZWxlY3QocGllQ2hhcnRFbClcbiAgICAgICAgICAgIC5hcHBlbmQoJ3N2ZycpXG4gICAgICAgICAgICAuYXR0cigndmlld0JveCcsIFtcbiAgICAgICAgICAgICAgICAtcGllQ2hhcnRXaWR0aCAvIDIsXG4gICAgICAgICAgICAgICAgLXBpZUNoYXJ0SGVpZ2h0IC8gMixcbiAgICAgICAgICAgICAgICBwaWVDaGFydFdpZHRoLFxuICAgICAgICAgICAgICAgIHBpZUNoYXJ0SGVpZ2h0LFxuICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIC5hcHBlbmQoJ2cnKVxuICAgICAgICAgICAgLnNlbGVjdEFsbCgnZGl2JylcbiAgICAgICAgICAgIC5kYXRhKHRvcEF2ZXJhZ2VQaWUpXG4gICAgICAgICAgICAuZW50ZXIoKVxuICAgICAgICAgICAgLmFwcGVuZCgncGF0aCcpXG4gICAgICAgICAgICAuYXR0cignZCcsIGFyYylcbiAgICAgICAgICAgIC5hdHRyKCdmaWxsJywgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwZXJjZW50YWdlID0gKGQuZGF0YS5hdmcgLyB0b3BTdW0pICogMTAwO1xuICAgICAgICAgICAgICAgIHJldHVybiBwZXJjZW50YWdlID4gMTAgPyBjb2xvcihpKSA6ICdTbGF0ZUdyYXknO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5hdHRyKCdzdHJva2UnLCAnI2YyZjJmMicpXG4gICAgICAgICAgICAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsICcxcHgnKVxuICAgICAgICAgICAgLm9uKCdjbGljaycsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgICAgICAgb25DbGlja0NoYXJ0QXJlYShkLCB7IC4uLmkuZGF0YSwgaW5kZXg6IGkuaW5kZXggfSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgICAgICAgIG9uTW91c2VPdmVyKGQsIHsgLi4uaS5kYXRhLCBpbmRleDogaS5pbmRleCB9KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub24oJ21vdXNlb3V0JywgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICAgICAgICBvbk1vdXNlT3V0KGQsIHsgLi4uaS5kYXRhLCBpbmRleDogaS5pbmRleCB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIGQzLnNlbGVjdChwaWVDaGFydEVsKVxuICAgICAgICAgICAgLnNlbGVjdCgnc3ZnJylcbiAgICAgICAgICAgIC5zZWxlY3RBbGwoJ2RpdicpXG4gICAgICAgICAgICAuZGF0YSh0b3BBdmVyYWdlUGllKVxuICAgICAgICAgICAgLmVudGVyKClcbiAgICAgICAgICAgIC5hcHBlbmQoJ3RleHQnKVxuICAgICAgICAgICAgLnRleHQoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwZXJjZW50YWdlID0gKGQuZGF0YS5hdmcgLyB0b3BTdW0pICogMTAwO1xuICAgICAgICAgICAgICAgIHJldHVybiBwZXJjZW50YWdlID4gMTBcbiAgICAgICAgICAgICAgICAgICAgPyBgJHtNYXRoLnJvdW5kKHBlcmNlbnRhZ2UpfSVgXG4gICAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5hdHRyKCd0cmFuc2Zvcm0nLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAndHJhbnNsYXRlKCcgKyBhcmMuY2VudHJvaWQoZCkgKyAnKSc7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmF0dHIoJ2ZvbnQtc2l6ZScsICcxNCcpXG4gICAgICAgICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ21pZGRsZScpXG4gICAgICAgICAgICAuc3R5bGUoJ2ZpbGwnLCAnI2YyZjJmMicpO1xuICAgIH0pO1xuXG4gICAgYWZ0ZXJVcGRhdGUoKCkgPT4ge1xuICAgICAgICBjb25zdCBzZWxlY3RlZEdyb3VwID0gW2QzLnNlbGVjdChwaWVDaGFydEVsKS5zZWxlY3RBbGwoJ3BhdGgnKV07XG4gICAgICAgIGNvbnN0IGRhdGEgPSBmb2N1c2VkRGF0YSB8fCBzZWxlY3RlZERhdGE7XG4gICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICBzZWxlY3RlZEdyb3VwLmZvckVhY2goKGdyb3VwKSA9PiB7XG4gICAgICAgICAgICAgICAgZ3JvdXAuZmlsdGVyKChkLCBpKSA9PiBpICE9PSBkYXRhLmluZGV4KS5zdHlsZSgnb3BhY2l0eScsIDAuNSk7XG4gICAgICAgICAgICAgICAgZ3JvdXAuZmlsdGVyKChkLCBpKSA9PiBpID09PSBkYXRhLmluZGV4KS5zdHlsZSgnb3BhY2l0eScsIDEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZWxlY3RlZEdyb3VwLmZvckVhY2goKGdyb3VwKSA9PiB7XG4gICAgICAgICAgICAgICAgZ3JvdXAuc3R5bGUoJ29wYWNpdHknLCAxKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG48L3NjcmlwdD5cblxuPGRpdlxuICAgIGJpbmQ6dGhpcz17cGllQ2hhcnRFbH1cbiAgICBiaW5kOmNsaWVudFdpZHRoPXtwaWVDaGFydFdpZHRofVxuICAgIGJpbmQ6Y2xpZW50SGVpZ2h0PXtwaWVDaGFydEhlaWdodH1cbiAgICBjbGFzcz1cInBpZVwiXG4+XG4gICAgPGgyPk1hcmtldCBTaGFyZTwvaDI+XG48L2Rpdj5cblxuPHN0eWxlPlxuICAgIC5waWUge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMzFjMjc7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gICAgICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xuICAgICAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cblxuICAgIC5waWUgOmdsb2JhbChzdmcpIHtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgIH1cbjwvc3R5bGU+XG4iXSwibmFtZXMiOlsiZDMuc3VtIiwiZDMuc2NhbGVPcmRpbmFsIiwiZDMuc2NoZW1lVGFibGVhdTEwIiwiZDMucGllIiwiYXJjIiwiZDMuYXJjIiwiZDMuc2VsZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FLUSxVQUFVO0tBQ1YsYUFBYTtLQUNiLGNBQWM7T0FFUCxXQUFXO09BQ1gsVUFBVTtPQUNWLGdCQUFnQjtPQUVoQixXQUFXO09BQ1gsWUFBWTtPQUNaLE9BQU87O0NBRWxCLE9BQU87UUFDRyxVQUFVLEdBQUcsaUJBQWlCLENBQUMsT0FBTztRQUN0QyxNQUFNLEdBQUdBLEdBQU0sQ0FBQyxVQUFVLEVBQUcsSUFBSSxJQUFLLElBQUksQ0FBQyxHQUFHO1FBRTlDLEtBQUssR0FBR0MsT0FBZSxDQUFDQyxTQUFrQjtRQUMxQyxhQUFhLEdBQUdDLEdBQU0sR0FBRyxLQUFLLENBQUUsSUFBSSxJQUFLLElBQUksQ0FBQyxHQUFHLEVBQUUsVUFBVTtRQUM3RCxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsY0FBYyxJQUFJLENBQUM7UUFDcERDLEtBQUcsR0FBR0MsR0FBTSxHQUFHLFdBQVcsQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLE1BQU07O0VBRXREQyxNQUFTLENBQUMsVUFBVSxFQUNmLE1BQU0sQ0FBQyxLQUFLLEVB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
