import { MakeUser } from "./";
import { addFakeUser } from "../test/generators/makeFakeUser";

describe("user", () => {
  it("should throw an error if Id is not an Id", () => {
    const user = addFakeUser({ id: "hello" });
    expect(() => MakeUser(user)).toThrow("Invalid user ID");
  });
  it("Should throw error if fname does not exists", () => {
    const user = addFakeUser({ fname: null });

    expect(() => MakeUser(user)).toThrow("invalid first name");
  });

  it("Should throw error if email does not exists", () => {
    const user = addFakeUser({ email: null });

    expect(() => MakeUser(user)).toThrow("invalid email");
  });

  it("Should throw error if email is not valid", () => {
    const user = addFakeUser({ email: "oscar@oscar" });

    expect(() => MakeUser(user)).toThrow("invalid email");
  });

  it("should return Oscar as fname", () => {
    const user = addFakeUser({});

    const userEntity = MakeUser(user);

    expect(userEntity.getFname()).toEqual("Oscar");
  });

  it("should return the right GeoLocation as stored", () => {
    const user = addFakeUser({});

    const userEntity = MakeUser(user);

    expect(userEntity.getLocation()).toEqual([
      -3.5812442820069346, 40.47009377828564
    ]);
  });

  it("Should return the right GeoLocation object", () => {
    const user = addFakeUser({});

    const userEntity = MakeUser(user);

    expect(userEntity.getGeoLocation(user.geoLocation)).toStrictEqual({
      lon: -3.5812442820069346,
      lat: 40.47009377828564
    });
  });
});
