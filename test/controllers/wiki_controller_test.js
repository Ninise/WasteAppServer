const assert = require('assert');
const request = require('supertest');
const app = require('../../app');
const mongoose = require('mongoose');

const { Product, RECYCLE, GARBAGE, ORGANIC } = mongoose.model('product');

describe('Wiki Controller', () => {
  let product;

  beforeEach((done) => {
    product = new Product({
      icon: 'https://adsad.asda/jpg',
      name: 'Coke',
      wayToRecycler: 'Throw into recycler bin',
      type: RECYCLE,
    });

    Promise.all([product.save()]).then((result) => done());
  });

  it('GET to /api/wiki return all products', (done) => {
    request(app)
      .get(`/api/wiki`)
      .end((err, res) => {
        assert(res.body.length == 1);
        //   assert(res.body[0].postId == post._id);
        done();
      });
  });

  //   it('POST to /api/comments/ creates comment', (done) => {
  //     request(app)
  //       .post(`/api/comments`)
  //       .send({
  //         content: 'Good day!',
  //         postId: post._id,
  //         user: user._id,
  //       })
  //       .end((err, res) => {
  //         Comment.findOne({ content: 'Good day!' }).then((comment) => {
  //           User.findById(user._id)
  //             .populate('participatedPosts')
  //             .then((user) => {
  //               assert(user.participatedPosts[0].photo === 'adasdada');
  //               assert(comment.content === 'Good day!');
  //               done();
  //             });
  //         });
  //       });
  //   });

  //   it('DELETE to /api/comments/commentId/ delete the comment', (done) => {
  //     const comment1 = new Comment({
  //       content: 'Good staff',
  //       postId: post._id,
  //       user: user._id,
  //     });

  //     comment1.save().then((comment) => {
  //       request(app)
  //         .delete(`/api/comments/${comment1._id}`)
  //         .end((err, res) => {
  //           Comment.findOne({ content: 'Good staff' }).then((comment) => {
  //             assert(comment === null);
  //             done();
  //           });
  //         });
  //     });
  //   });
});
