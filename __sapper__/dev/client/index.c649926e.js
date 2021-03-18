import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, b as space, t as text, c as create_component, f as claim_element, g as children, h as claim_space, j as claim_text, a as detach_dev, k as claim_component, l as attr_dev, m as add_location, o as insert_dev, p as append_dev, r as mount_component, u as listen_dev, w as transition_in, x as transition_out, y as destroy_component } from './client.bae760c0.js';
import { c as csvParse } from './operation.6e105956.js';
import DynamicTrend from './DynamicTrend.5981ef2e.js';
import PopularityBarChart from './PopularityBarChart.b1ecda51.js';
import PopularitySharePieChart from './PopularitySharePieChart.55ce120e.js';

const DATA_PATH = 'data';

async function loadCSV(filename) {
    const res = await this.fetch(`${DATA_PATH}/${filename}`);
    return csvParse(await res.text());
}

/* src/routes/steam-game/index.svelte generated by Svelte v3.35.0 */
const file = "src/routes/steam-game/index.svelte";

function create_fragment(ctx) {
	let div2;
	let h1;
	let img;
	let img_src_value;
	let t0;
	let span;
	let t1;
	let t2;
	let div0;
	let popularitybarchart;
	let t3;
	let popularitysharepiechart;
	let t4;
	let div1;
	let dynamictrend;
	let current;
	let mounted;
	let dispose;

	popularitybarchart = new PopularityBarChart({
			props: {
				onMouseOver: /*onMouseOverHandler*/ ctx[3],
				onMouseOut: /*onMouseOutHandler*/ ctx[4],
				onClickChartArea: /*onClickChartArea*/ ctx[6],
				selectedData: /*selectedData*/ ctx[1],
				focusedData: /*focusedData*/ ctx[2],
				rawData: /*rawData*/ ctx[0]
			},
			$$inline: true
		});

	popularitysharepiechart = new PopularitySharePieChart({
			props: {
				onMouseOver: /*onMouseOverHandler*/ ctx[3],
				onMouseOut: /*onMouseOutHandler*/ ctx[4],
				onClickChartArea: /*onClickChartArea*/ ctx[6],
				selectedData: /*selectedData*/ ctx[1],
				focusedData: /*focusedData*/ ctx[2],
				rawData: /*rawData*/ ctx[0]
			},
			$$inline: true
		});

	dynamictrend = new DynamicTrend({
			props: {
				data: /*focusedData*/ ctx[2] || /*selectedData*/ ctx[1],
				rawData: /*rawData*/ ctx[0]
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			div2 = element("div");
			h1 = element("h1");
			img = element("img");
			t0 = space();
			span = element("span");
			t1 = text("Steam Game Dashboard (2012 - 2021)");
			t2 = space();
			div0 = element("div");
			create_component(popularitybarchart.$$.fragment);
			t3 = space();
			create_component(popularitysharepiechart.$$.fragment);
			t4 = space();
			div1 = element("div");
			create_component(dynamictrend.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			div2 = claim_element(nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			h1 = claim_element(div2_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			img = claim_element(h1_nodes, "IMG", { src: true, alt: true, class: true });
			t0 = claim_space(h1_nodes);
			span = claim_element(h1_nodes, "SPAN", { class: true });
			var span_nodes = children(span);
			t1 = claim_text(span_nodes, "Steam Game Dashboard (2012 - 2021)");
			span_nodes.forEach(detach_dev);
			h1_nodes.forEach(detach_dev);
			t2 = claim_space(div2_nodes);
			div0 = claim_element(div2_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			claim_component(popularitybarchart.$$.fragment, div0_nodes);
			t3 = claim_space(div0_nodes);
			claim_component(popularitysharepiechart.$$.fragment, div0_nodes);
			div0_nodes.forEach(detach_dev);
			t4 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			claim_component(dynamictrend.$$.fragment, div1_nodes);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			if (img.src !== (img_src_value = "icons/steam.svg")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "steam icon");
			attr_dev(img, "class", "svelte-16m4r7n");
			add_location(img, file, 43, 8, 1053);
			attr_dev(span, "class", "svelte-16m4r7n");
			add_location(span, file, 44, 8, 1108);
			attr_dev(h1, "class", "svelte-16m4r7n");
			add_location(h1, file, 42, 4, 1040);
			attr_dev(div0, "class", "main-chart svelte-16m4r7n");
			add_location(div0, file, 47, 4, 1171);
			attr_dev(div1, "class", "dynamic-chart svelte-16m4r7n");
			add_location(div1, file, 65, 4, 1682);
			attr_dev(div2, "class", "container svelte-16m4r7n");
			add_location(div2, file, 41, 0, 984);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div2, anchor);
			append_dev(div2, h1);
			append_dev(h1, img);
			append_dev(h1, t0);
			append_dev(h1, span);
			append_dev(span, t1);
			append_dev(div2, t2);
			append_dev(div2, div0);
			mount_component(popularitybarchart, div0, null);
			append_dev(div0, t3);
			mount_component(popularitysharepiechart, div0, null);
			append_dev(div2, t4);
			append_dev(div2, div1);
			mount_component(dynamictrend, div1, null);
			current = true;

			if (!mounted) {
				dispose = listen_dev(div2, "click", /*onClickEmptyArea*/ ctx[5], false, false, false);
				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			const popularitybarchart_changes = {};
			if (dirty & /*selectedData*/ 2) popularitybarchart_changes.selectedData = /*selectedData*/ ctx[1];
			if (dirty & /*focusedData*/ 4) popularitybarchart_changes.focusedData = /*focusedData*/ ctx[2];
			if (dirty & /*rawData*/ 1) popularitybarchart_changes.rawData = /*rawData*/ ctx[0];
			popularitybarchart.$set(popularitybarchart_changes);
			const popularitysharepiechart_changes = {};
			if (dirty & /*selectedData*/ 2) popularitysharepiechart_changes.selectedData = /*selectedData*/ ctx[1];
			if (dirty & /*focusedData*/ 4) popularitysharepiechart_changes.focusedData = /*focusedData*/ ctx[2];
			if (dirty & /*rawData*/ 1) popularitysharepiechart_changes.rawData = /*rawData*/ ctx[0];
			popularitysharepiechart.$set(popularitysharepiechart_changes);
			const dynamictrend_changes = {};
			if (dirty & /*focusedData, selectedData*/ 6) dynamictrend_changes.data = /*focusedData*/ ctx[2] || /*selectedData*/ ctx[1];
			if (dirty & /*rawData*/ 1) dynamictrend_changes.rawData = /*rawData*/ ctx[0];
			dynamictrend.$set(dynamictrend_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(popularitybarchart.$$.fragment, local);
			transition_in(popularitysharepiechart.$$.fragment, local);
			transition_in(dynamictrend.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(popularitybarchart.$$.fragment, local);
			transition_out(popularitysharepiechart.$$.fragment, local);
			transition_out(dynamictrend.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div2);
			destroy_component(popularitybarchart);
			destroy_component(popularitysharepiechart);
			destroy_component(dynamictrend);
			mounted = false;
			dispose();
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

async function preload() {
	const rawData = await loadCSV.call(this, "steam-game-trends.csv");
	return { rawData };
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Steam_game", slots, []);
	let selectedData;
	let focusedData;
	let { rawData } = $$props;

	const onMouseOverHandler = function (_event, data) {
		if (!focusedData) {
			$$invalidate(1, selectedData = data);
		}
	};

	const onMouseOutHandler = () => {
		if (!focusedData) {
			$$invalidate(1, selectedData = null);
		}
	};

	const onClickEmptyArea = () => {
		$$invalidate(2, focusedData = null);
		$$invalidate(1, selectedData = null);
	};

	const onClickChartArea = (event, data) => {
		event.stopPropagation();
		$$invalidate(2, focusedData = data);
	};

	const writable_props = ["rawData"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Steam_game> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("rawData" in $$props) $$invalidate(0, rawData = $$props.rawData);
	};

	$$self.$capture_state = () => ({
		loadCSV,
		preload,
		DynamicTrend,
		PopularityBarChart,
		PopularitySharePieChart,
		selectedData,
		focusedData,
		rawData,
		onMouseOverHandler,
		onMouseOutHandler,
		onClickEmptyArea,
		onClickChartArea
	});

	$$self.$inject_state = $$props => {
		if ("selectedData" in $$props) $$invalidate(1, selectedData = $$props.selectedData);
		if ("focusedData" in $$props) $$invalidate(2, focusedData = $$props.focusedData);
		if ("rawData" in $$props) $$invalidate(0, rawData = $$props.rawData);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		rawData,
		selectedData,
		focusedData,
		onMouseOverHandler,
		onMouseOutHandler,
		onClickEmptyArea,
		onClickChartArea
	];
}

class Steam_game extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { rawData: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Steam_game",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*rawData*/ ctx[0] === undefined && !("rawData" in props)) {
			console.warn("<Steam_game> was created without expected prop 'rawData'");
		}
	}

	get rawData() {
		throw new Error("<Steam_game>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set rawData(value) {
		throw new Error("<Steam_game>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Steam_game;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYzY0OTkyNmUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy5qcyIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvc3RlYW0tZ2FtZS9pbmRleC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnO1xuXG5leHBvcnQgY29uc3QgREFUQV9QQVRIID0gJ2RhdGEnO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZENTVihmaWxlbmFtZSkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMuZmV0Y2goYCR7REFUQV9QQVRIfS8ke2ZpbGVuYW1lfWApO1xuICAgIHJldHVybiBkMy5jc3ZQYXJzZShhd2FpdCByZXMudGV4dCgpKTtcbn1cbiIsIjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuICAgIGltcG9ydCB7IGxvYWRDU1YgfSBmcm9tICcuLi8uLi91dGlscyc7XG4gICAgZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByZWxvYWQoKSB7XG4gICAgICAgIGNvbnN0IHJhd0RhdGEgPSBhd2FpdCBsb2FkQ1NWLmNhbGwodGhpcywgJ3N0ZWFtLWdhbWUtdHJlbmRzLmNzdicpO1xuICAgICAgICByZXR1cm4geyByYXdEYXRhIH07XG4gICAgfVxuPC9zY3JpcHQ+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IER5bmFtaWNUcmVuZCBmcm9tICcuL0R5bmFtaWNUcmVuZC5zdmVsdGUnO1xuICAgIGltcG9ydCBQb3B1bGFyaXR5QmFyQ2hhcnQgZnJvbSAnLi9Qb3B1bGFyaXR5QmFyQ2hhcnQuc3ZlbHRlJztcbiAgICBpbXBvcnQgUG9wdWxhcml0eVNoYXJlUGllQ2hhcnQgZnJvbSAnLi9Qb3B1bGFyaXR5U2hhcmVQaWVDaGFydC5zdmVsdGUnO1xuXG4gICAgbGV0IHNlbGVjdGVkRGF0YTtcbiAgICBsZXQgZm9jdXNlZERhdGE7XG5cbiAgICBleHBvcnQgbGV0IHJhd0RhdGE7XG5cbiAgICBjb25zdCBvbk1vdXNlT3ZlckhhbmRsZXIgPSBmdW5jdGlvbiAoX2V2ZW50LCBkYXRhKSB7XG4gICAgICAgIGlmICghZm9jdXNlZERhdGEpIHtcbiAgICAgICAgICAgIHNlbGVjdGVkRGF0YSA9IGRhdGE7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3Qgb25Nb3VzZU91dEhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICAgIGlmICghZm9jdXNlZERhdGEpIHtcbiAgICAgICAgICAgIHNlbGVjdGVkRGF0YSA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3Qgb25DbGlja0VtcHR5QXJlYSA9ICgpID0+IHtcbiAgICAgICAgZm9jdXNlZERhdGEgPSBudWxsO1xuICAgICAgICBzZWxlY3RlZERhdGEgPSBudWxsO1xuICAgIH07XG5cbiAgICBjb25zdCBvbkNsaWNrQ2hhcnRBcmVhID0gKGV2ZW50LCBkYXRhKSA9PiB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBmb2N1c2VkRGF0YSA9IGRhdGE7XG4gICAgfTtcbjwvc2NyaXB0PlxuXG48ZGl2IGNsYXNzPVwiY29udGFpbmVyXCIgb246Y2xpY2s9e29uQ2xpY2tFbXB0eUFyZWF9PlxuICAgIDxoMT5cbiAgICAgICAgPGltZyBzcmM9XCJpY29ucy9zdGVhbS5zdmdcIiBhbHQ9XCJzdGVhbSBpY29uXCIgLz5cbiAgICAgICAgPHNwYW4+U3RlYW0gR2FtZSBEYXNoYm9hcmQgKDIwMTIgLSAyMDIxKTwvc3Bhbj5cbiAgICA8L2gxPlxuXG4gICAgPGRpdiBjbGFzcz1cIm1haW4tY2hhcnRcIj5cbiAgICAgICAgPFBvcHVsYXJpdHlCYXJDaGFydFxuICAgICAgICAgICAgb25Nb3VzZU92ZXI9e29uTW91c2VPdmVySGFuZGxlcn1cbiAgICAgICAgICAgIG9uTW91c2VPdXQ9e29uTW91c2VPdXRIYW5kbGVyfVxuICAgICAgICAgICAge29uQ2xpY2tDaGFydEFyZWF9XG4gICAgICAgICAgICB7c2VsZWN0ZWREYXRhfVxuICAgICAgICAgICAge2ZvY3VzZWREYXRhfVxuICAgICAgICAgICAge3Jhd0RhdGF9XG4gICAgICAgIC8+XG4gICAgICAgIDxQb3B1bGFyaXR5U2hhcmVQaWVDaGFydFxuICAgICAgICAgICAgb25Nb3VzZU92ZXI9e29uTW91c2VPdmVySGFuZGxlcn1cbiAgICAgICAgICAgIG9uTW91c2VPdXQ9e29uTW91c2VPdXRIYW5kbGVyfVxuICAgICAgICAgICAge29uQ2xpY2tDaGFydEFyZWF9XG4gICAgICAgICAgICB7c2VsZWN0ZWREYXRhfVxuICAgICAgICAgICAge2ZvY3VzZWREYXRhfVxuICAgICAgICAgICAge3Jhd0RhdGF9XG4gICAgICAgIC8+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImR5bmFtaWMtY2hhcnRcIj5cbiAgICAgICAgPER5bmFtaWNUcmVuZCBkYXRhPXtmb2N1c2VkRGF0YSB8fCBzZWxlY3RlZERhdGF9IHtyYXdEYXRhfSAvPlxuICAgIDwvZGl2PlxuPC9kaXY+XG5cbjxzdHlsZT5cbiAgICAuY29udGFpbmVyIHtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgcGFkZGluZzogMnJlbTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFiMjgzODtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgfVxuXG4gICAgLm1haW4tY2hhcnQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4OiAxO1xuICAgIH1cblxuICAgIC5tYWluLWNoYXJ0IDpnbG9iYWwoLmJhcikge1xuICAgICAgICBmbGV4OiAyO1xuICAgIH1cblxuICAgIC5tYWluLWNoYXJ0IDpnbG9iYWwoLnBpZSkge1xuICAgICAgICBmbGV4OiAxO1xuICAgIH1cblxuICAgIC5keW5hbWljLWNoYXJ0IHtcbiAgICAgICAgbWFyZ2luLXRvcDogM3JlbTtcbiAgICAgICAgZmxleDogMjtcbiAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzEzMWMyNztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuXG4gICAgOmdsb2JhbChoMSkge1xuICAgICAgICBjb2xvcjogI2YyZjJmMjtcbiAgICAgICAgbWFyZ2luOiAwIDAuNXJlbSAxcmVtIDAuNXJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgfVxuXG4gICAgOmdsb2JhbChoMSkgPiAqIHtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB9XG5cbiAgICA6Z2xvYmFsKGgyKSxcbiAgICA6Z2xvYmFsKGgzKSB7XG4gICAgICAgIGNvbG9yOiAjZjJmMmYyO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IGF1dG87XG4gICAgfVxuXG4gICAgLmR5bmFtaWMtY2hhcnQgOmdsb2JhbChzdmcpIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMC41cmVtO1xuICAgIH1cblxuICAgIC5keW5hbWljLWNoYXJ0IDpnbG9iYWwoZGl2KSB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgfVxuPC9zdHlsZT5cbiJdLCJuYW1lcyI6WyJkMy5jc3ZQYXJzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRU8sTUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDO0FBQ2hDO0FBQ08sZUFBZSxPQUFPLENBQUMsUUFBUSxFQUFFO0FBQ3hDLElBQUksTUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM3RCxJQUFJLE9BQU9BLFFBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQ3pDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0NDMEN5QixHQUFrQjtzQ0FDbkIsR0FBaUI7Ozs7Ozs7Ozs7O3dDQU9oQixHQUFrQjtzQ0FDbkIsR0FBaUI7Ozs7Ozs7Ozs7OzBCQVFiLEdBQVcsd0JBQUksR0FBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2REF6QnRCLEdBQWdCOzs7Ozs7Ozs7Ozs7Ozs7OzRGQXlCckIsR0FBVyx3QkFBSSxHQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQWhFN0IsT0FBTztPQUNuQixPQUFPLFNBQVMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsdUJBQXVCO1VBQ3ZELE9BQU87Ozs7OztLQVNoQixZQUFZO0tBQ1osV0FBVztPQUVKLE9BQU87O09BRVosa0JBQWtCLGFBQWEsTUFBTSxFQUFFLElBQUk7T0FDeEMsV0FBVzttQkFDWixZQUFZLEdBQUcsSUFBSTs7OztPQUlyQixpQkFBaUI7T0FDZCxXQUFXO21CQUNaLFlBQVksR0FBRyxJQUFJOzs7O09BSXJCLGdCQUFnQjtrQkFDbEIsV0FBVyxHQUFHLElBQUk7a0JBQ2xCLFlBQVksR0FBRyxJQUFJOzs7T0FHakIsZ0JBQWdCLElBQUksS0FBSyxFQUFFLElBQUk7RUFDakMsS0FBSyxDQUFDLGVBQWU7a0JBQ3JCLFdBQVcsR0FBRyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
