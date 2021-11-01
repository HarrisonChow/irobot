const { expect } = require('@jest/globals');
const { it } = require('jest-circus');
const { ContextConsumer } = require('react-is');
const iRobot = require('./irobot.js');

describe('left()', () => {
  describe('When facing NORTH currently', () => {
    test("should face to the WEST after", () => {
      const aIRobot = new iRobot(0, 0, 'NORTH');
      aIRobot.left();
      expect(aIRobot.direction).toEqual('WEST');
    });
  });

  describe('When facing EAST currently', () => {
    test("should face to the NORTH after", () => {
      const aIRobot = new iRobot(0, 0, 'EAST');
      aIRobot.left();
      expect(aIRobot.direction).toEqual('NORTH');
    });
  });

  describe('When facing SOUTH currently', () => {
    test("should face to the EAST after", () => {
      const aIRobot = new iRobot(0, 0, 'SOUTH');
      aIRobot.left();
      expect(aIRobot.direction).toEqual('EAST');
    });
  });

  describe('When facing WEST currently', () => {
    test("should face to the SOUTH after", () => {
      const aIRobot = new iRobot(0, 0, 'WEST');
      aIRobot.left();
      expect(aIRobot.direction).toEqual('SOUTH');
    });
  });

  describe('When facing EAST currently and with random position', () => {
    test("should face to the NORTH after", () => {
      const x = Math.random(0, 5);
      const y = Math.random(0, 5);
      const aIRobot = new iRobot(x, y, 'EAST');
      aIRobot.left();
      expect(aIRobot.direction).toEqual('NORTH');
    });
  });

});

describe('right()', () => {
  describe('When facing NORTH currently', () => {
    test("should face to the EAST after", () => {
      const aIRobot = new iRobot(0, 0, 'NORTH');
      aIRobot.right();
      expect(aIRobot.direction).toEqual('EAST');
    });
  })

  describe('When facing EAST currently', () => {
    test("should face to the SOUTH after", () => {
      const aIRobot = new iRobot(0, 0, 'EAST');
      aIRobot.right();
      expect(aIRobot.direction).toEqual('SOUTH');
    });
  });

  describe('When facing SOUTH currently', () => {
    test("should face to the WEST after", () => {
      const aIRobot = new iRobot(0, 0, 'SOUTH');
      aIRobot.right();
      expect(aIRobot.direction).toEqual('WEST');
    });
  });

  describe('When facing WEST currently', () => {
    test("should face to the NORTH after", () => {
      const aIRobot = new iRobot(0, 0, 'WEST');
      aIRobot.right();
      expect(aIRobot.direction).toEqual('NORTH');
    });
  });

  describe('When facing EAST currently and with random position', () => {
    test("should face to the SOUTH after", () => {
      const x = Math.random(0, 5);
      const y = Math.random(0, 5);
      const aIRobot = new iRobot(x, y, 'EAST');
      aIRobot.right();
      expect(aIRobot.direction).toEqual('SOUTH');
    });
  });
});

describe('move()', () => {
  describe('When facing EAST currently', () => {
    describe('When not on the edge of the EAST', () => {
      [[0, 1], [1, 2], [2, 2], [3, 4], [4, 3]].forEach((position) => {
        describe(`When position is ${position[0]} , ${position[1]}`, () => {
          test(`new position should be ${position[0] + 1} , ${position[1]}`, () => {
            const aIRobot = new iRobot(position[0], position[1], 'EAST');
            aIRobot.move();
            expect(aIRobot.xPosition).toEqual(position[0] + 1);
            expect(aIRobot.yPosition).toEqual(position[1]);
            expect(aIRobot.direction).toEqual('EAST');
          });
        })
      });
    });
    describe('When on the edge of the EAST', () => {
      [[5, 1], [5, 2], [5, 3], [5, 4], [5, 5], [5, 0]].forEach((position) => {
        describe(`When position is 5 , ${position[1]}`, () => {
          test(`new position should be 5 , ${position[1]}`, () => {
            const aIRobot = new iRobot(5, position[1], 'EAST');
            aIRobot.move();
            expect(aIRobot.xPosition).toEqual(5);
            expect(aIRobot.yPosition).toEqual(position[1]);
            expect(aIRobot.direction).toEqual('EAST');
          });
        })
      });
    });
  });

  describe('When facing WEST currently', () => {
    describe('When not on the edge of the WEST', () => {
      [[1, 1], [1, 2], [2, 2], [3, 4], [4, 3]].forEach((position) => {
        describe(`When position is ${position[0]} , ${position[1]}`, () => {
          test(`new position should be ${position[0] - 1} , ${position[1]}`, () => {
            const aIRobot = new iRobot(position[0], position[1], 'WEST');
            aIRobot.move();
            expect(aIRobot.xPosition).toEqual(position[0] - 1);
            expect(aIRobot.yPosition).toEqual(position[1]);
            expect(aIRobot.direction).toEqual('WEST');
          });
        })
      });
    });
    describe('When on the edge of the WEST', () => {
      [[0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 0]].forEach((position) => {
        describe(`When position is 0 , ${position[1]}`, () => {
          test(`new position should be 0 , ${position[1]}`, () => {
            const aIRobot = new iRobot(0, position[1], 'WEST');
            aIRobot.move();
            expect(aIRobot.xPosition).toEqual(0);
            expect(aIRobot.yPosition).toEqual(position[1]);
            expect(aIRobot.direction).toEqual('WEST');
          });
        })
      });
    });
  });

  describe('When facing NORTH currently', () => {
    describe('When not on the edge of the NORTH', () => {
      [[1, 1], [1, 2], [2, 2], [3, 4], [4, 3]].forEach((position) => {
        describe(`When position is ${position[0]} , ${position[1]}`, () => {
          test(`new position should be ${position[0]} , ${position[1]} + 1`, () => {
            const aIRobot = new iRobot(position[0], position[1], 'NORTH');
            aIRobot.move();
            expect(aIRobot.xPosition).toEqual(position[0]);
            expect(aIRobot.yPosition).toEqual(position[1] + 1);
            expect(aIRobot.direction).toEqual('NORTH');
          });
        })
      });
    });
    describe('When on the edge of the NORTH', () => {
      [[1, 5], [2, 5], [3, 5], [4, 5], [5, 5], [0, 5]].forEach((position) => {
        describe(`When position is position[0] , 5`, () => {
          test(`new position should be position[0] , 5`, () => {
            const aIRobot = new iRobot(position[0], 5, 'NORTH');
            aIRobot.move();
            expect(aIRobot.xPosition).toEqual(position[0]);
            expect(aIRobot.yPosition).toEqual(5);
            expect(aIRobot.direction).toEqual('NORTH');
          });
        })
      });
    });
  });

  describe('When facing SOUTH currently', () => {
    describe('When not on the edge of the SOUTH', () => {
      [[1, 1], [1, 2], [2, 2], [3, 4], [4, 3]].forEach((position) => {
        describe(`When position is ${position[0]} , ${position[1]}`, () => {
          test(`new position should be ${position[0]} , ${position[1]} - 1`, () => {
            const aIRobot = new iRobot(position[0], position[1], 'SOUTH');
            aIRobot.move();
            expect(aIRobot.xPosition).toEqual(position[0]);
            expect(aIRobot.yPosition).toEqual(position[1] - 1);
            expect(aIRobot.direction).toEqual('SOUTH');
          });
        })
      });
    });
    describe('When on the edge of the SOUTH', () => {
      [[1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [0, 0]].forEach((position) => {
        describe(`When position is position[0] , 0`, () => {
          test(`new position should be position[0] , 0`, () => {
            const aIRobot = new iRobot(position[0], 0, 'SOUTH');
            aIRobot.move();
            expect(aIRobot.xPosition).toEqual(position[0]);
            expect(aIRobot.yPosition).toEqual(0);
            expect(aIRobot.direction).toEqual('SOUTH');
          });
        })
      });
    });
  });
});