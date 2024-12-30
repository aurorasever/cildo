var result = _.map(acfFields, function(field) {
  return {
    From: field.From,
    To: field.To,
    Degree: field.Degree
  };
});

console.log(result);
