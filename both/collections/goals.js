Goals = new Mongo.Collection("goals");

const GoalSchema = new SimpleSchema({
  "created_at": {
    type: Date,
    optional: false
  }
});

Thoughts.attaSchema(GoalSchema);
