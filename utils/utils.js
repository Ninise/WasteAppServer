module.exports = {
  response(
    status,
    umsg = undefined,
    dmsg = undefined,
    data = undefined,
    code = 200,
  ) {
    return {
      success: status,
      umsg: umsg,
      dmsg: dmsg,
      data: data,
      code: code,
    };
  },
};
