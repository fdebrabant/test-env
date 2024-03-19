import {describe, expect, test} from '@jest/globals';
import {Rover} from "./index";


describe('rover', () => {
    test("should create an instance of Rover", () => {
        const rover = new Rover();
        expect(rover).toBeInstanceOf(Rover);
    });
});