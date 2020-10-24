import { mount } from "@vue/test-utils";
import HelloComponent from "../../src/renderer/components/HelloComponent.vue";

describe("HelloComponent", () => {
    const wrapper = mount(HelloComponent, {
        propsData: {
            name: "TestProp",
            initialEnthusiasm: 3
        }
    });

    it("is a Vue instance", () => {
        expect(wrapper.vm).toBeTruthy();
    });

    it("sets exclamation marks based on enthusiam level.", ()=> {
        expect(wrapper.find(".greeting").text()).toBe("Hello TestProp!!!");
        expect(wrapper.find(".greeting").text()).not.toBe("Hello TestProp!!");
    });

});